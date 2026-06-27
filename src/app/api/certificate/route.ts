import { NextResponse } from 'next/server';
import { PDFDocument, rgb, StandardFonts } from 'pdf-lib';
import { getSession } from '@/lib/auth';
import { prisma } from '@/lib/prisma';
import { getCourseProgress, createCertificate } from '@/lib/db';

export async function POST(req: Request) {
  try {
    const session = await getSession();
    if (!session)
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

    const { courseId } = await req.json();
    const userId = session.userId as string;

    const user = await prisma.user.findUnique({ where: { id: userId } });
    const course = await prisma.course.findUnique({ where: { id: courseId } });

    if (!user || !course) {
      return NextResponse.json({ error: 'Data not found' }, { status: 404 });
    }

    // Verify course completion
    const progress = await getCourseProgress(userId, courseId);
    if (!progress || !progress.isComplete) {
      return NextResponse.json(
        { error: 'Course not fully completed' },
        { status: 400 }
      );
    }

    // Check if certificate already exists
    let certificate = await prisma.certificate.findUnique({
      where: { userId_courseId: { userId, courseId } },
    });

    if (!certificate) {
      certificate = await createCertificate(
        userId,
        courseId,
        progress.percentage
      );
    }

    // Create PDF certificate
    const pdfDoc = await PDFDocument.create();
    const page = pdfDoc.addPage([842, 595]); // A4 landscape
    const { width, height } = page.getSize();

    const timesRoman = await pdfDoc.embedFont(StandardFonts.TimesRoman);
    const timesRomanBold = await pdfDoc.embedFont(StandardFonts.TimesRomanBold);
    const helvetica = await pdfDoc.embedFont(StandardFonts.Helvetica);

    // ── Background border ──
    page.drawRectangle({
      x: 20,
      y: 20,
      width: width - 40,
      height: height - 40,
      borderColor: rgb(0.33, 0.36, 0.96),
      borderWidth: 3,
    });
    page.drawRectangle({
      x: 30,
      y: 30,
      width: width - 60,
      height: height - 60,
      borderColor: rgb(0.55, 0.36, 0.96),
      borderWidth: 1,
    });

    // ── Header ──
    const headerText = '🎓 CODE-MENTOR';
    page.drawText('CODE-MENTOR', {
      x: width / 2 - 100,
      y: height - 70,
      size: 18,
      font: helvetica,
      color: rgb(0.55, 0.36, 0.96),
    });

    // ── Title ──
    const titleText = 'Certificate of Completion';
    const titleWidth = timesRomanBold.widthOfTextAtSize(titleText, 36);
    page.drawText(titleText, {
      x: (width - titleWidth) / 2,
      y: height - 130,
      size: 36,
      font: timesRomanBold,
      color: rgb(0.07, 0.07, 0.14),
    });

    // ── Decorative line ──
    page.drawLine({
      start: { x: width / 2 - 150, y: height - 145 },
      end: { x: width / 2 + 150, y: height - 145 },
      thickness: 2,
      color: rgb(0.33, 0.36, 0.96),
    });

    // ── Body ──
    const certifiesText = 'This is to certify that';
    const certifiesWidth = timesRoman.widthOfTextAtSize(certifiesText, 16);
    page.drawText(certifiesText, {
      x: (width - certifiesWidth) / 2,
      y: height - 190,
      size: 16,
      font: timesRoman,
      color: rgb(0.29, 0.33, 0.39),
    });

    // ── User name ──
    const displayName = user.username.toUpperCase();
    const nameWidth = timesRomanBold.widthOfTextAtSize(displayName, 30);
    page.drawText(displayName, {
      x: (width - nameWidth) / 2,
      y: height - 240,
      size: 30,
      font: timesRomanBold,
      color: rgb(0.06, 0.09, 0.16),
    });

    // ── Completion text ──
    const completedText = 'has successfully completed the course';
    const completedWidth = timesRoman.widthOfTextAtSize(completedText, 16);
    page.drawText(completedText, {
      x: (width - completedWidth) / 2,
      y: height - 290,
      size: 16,
      font: timesRoman,
      color: rgb(0.29, 0.33, 0.39),
    });

    // ── Course title ──
    const courseTitle = course.title;
    const courseTitleWidth = timesRomanBold.widthOfTextAtSize(courseTitle, 24);
    page.drawText(courseTitle, {
      x: (width - courseTitleWidth) / 2,
      y: height - 340,
      size: 24,
      font: timesRomanBold,
      color: rgb(0.33, 0.36, 0.96),
    });

    // ── Date & Certificate Number ──
    const dateStr = `Issued: ${new Date(certificate.issuedAt).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}`;
    page.drawText(dateStr, {
      x: 60,
      y: 70,
      size: 10,
      font: helvetica,
      color: rgb(0.4, 0.45, 0.53),
    });

    const certNumText = `Certificate #${certificate.certificateNumber}`;
    const certNumWidth = helvetica.widthOfTextAtSize(certNumText, 10);
    page.drawText(certNumText, {
      x: width - 60 - certNumWidth,
      y: 70,
      size: 10,
      font: helvetica,
      color: rgb(0.4, 0.45, 0.53),
    });

    // ── Score ──
    const scoreText = `Final Score: ${certificate.finalScore}%`;
    const scoreWidth = helvetica.widthOfTextAtSize(scoreText, 12);
    page.drawText(scoreText, {
      x: (width - scoreWidth) / 2,
      y: height - 390,
      size: 12,
      font: helvetica,
      color: rgb(0.06, 0.5, 0.32),
    });

    const pdfBytes = await pdfDoc.save();

    return new Response(Buffer.from(pdfBytes), {
      status: 200,
      headers: {
        'Content-Type': 'application/pdf',
        'Content-Disposition': `attachment; filename="certificate-${course.slug}.pdf"`,
      },
    });
  } catch (error) {
    console.error('Certificate generation error:', error);
    return NextResponse.json(
      { error: 'Failed to generate certificate' },
      { status: 500 }
    );
  }
}
