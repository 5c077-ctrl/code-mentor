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

    let user: any = null;
    let course: any = null;

    try {
      user = await prisma.user.findUnique({ where: { id: userId } });
      course = await prisma.course.findUnique({ where: { id: courseId } });
    } catch (e) {
      console.warn('Prisma lookup failed in certificate route, using fallback:', e);
    }

    if (!user) {
      user = {
        id: userId,
        username: session.username || 'Student',
        email: 'student@codementor.pro',
      };
    }

    if (!course) {
      course = (await getCourseWithModules(courseId)) || {
        id: courseId,
        title: 'Code Mentor Certified Course',
        slug: courseId,
      };
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
    let certificate: any = null;
    try {
      certificate = await prisma.certificate.findUnique({
        where: { userId_courseId: { userId, courseId } },
      });
    } catch (e) {}

    if (!certificate) {
      certificate = await createCertificate(
        userId,
        courseId,
        progress.percentage
      );
    }

    if (!certificate) {
      return NextResponse.json(
        { error: 'Failed to issue certificate record' },
        { status: 500 }
      );
    }

    // Create PDF certificate
    const pdfDoc = await PDFDocument.create();
    const page = pdfDoc.addPage([842, 595]); // A4 landscape
    const { width, height } = page.getSize();

    const timesRoman = await pdfDoc.embedFont(StandardFonts.TimesRoman);
    const timesRomanBold = await pdfDoc.embedFont(StandardFonts.TimesRomanBold);
    const helvetica = await pdfDoc.embedFont(StandardFonts.Helvetica);
    const helveticaBold = await pdfDoc.embedFont(StandardFonts.HelveticaBold);

    // ── Background border ──
    page.drawRectangle({
      x: 20,
      y: 20,
      width: width - 40,
      height: height - 40,
      borderColor: rgb(0.39, 0.4, 0.95), // Indigo
      borderWidth: 3,
    });
    page.drawRectangle({
      x: 30,
      y: 30,
      width: width - 60,
      height: height - 60,
      borderColor: rgb(0.06, 0.72, 0.83), // Cyan accent
      borderWidth: 1,
    });

    // ── Header Branding ──
    page.drawText('CODE-MENTOR | BIG-TECH CAREER VERIFIED CERTIFICATE', {
      x: width / 2 - 200,
      y: height - 65,
      size: 13,
      font: helveticaBold,
      color: rgb(0.39, 0.4, 0.95),
    });

    // ── Title ──
    const titleText = 'Certificate of Professional Mastery';
    const titleWidth = timesRomanBold.widthOfTextAtSize(titleText, 34);
    page.drawText(titleText, {
      x: (width - titleWidth) / 2,
      y: height - 120,
      size: 34,
      font: timesRomanBold,
      color: rgb(0.07, 0.07, 0.14),
    });

    // ── Decorative line ──
    page.drawLine({
      start: { x: width / 2 - 160, y: height - 135 },
      end: { x: width / 2 + 160, y: height - 135 },
      thickness: 2,
      color: rgb(0.39, 0.4, 0.95),
    });

    // ── Certifies Text ──
    const certifiesText = 'This is to certify that';
    const certifiesWidth = timesRoman.widthOfTextAtSize(certifiesText, 15);
    page.drawText(certifiesText, {
      x: (width - certifiesWidth) / 2,
      y: height - 175,
      size: 15,
      font: timesRoman,
      color: rgb(0.29, 0.33, 0.39),
    });

    // ── User name ──
    const displayName = user.username.toUpperCase();
    const nameWidth = timesRomanBold.widthOfTextAtSize(displayName, 28);
    page.drawText(displayName, {
      x: (width - nameWidth) / 2,
      y: height - 220,
      size: 28,
      font: timesRomanBold,
      color: rgb(0.06, 0.09, 0.16),
    });

    // ── Completion Text ──
    const completedText = 'has successfully mastered all hands-on lessons, quizzes, and capstone labs for';
    const completedWidth = timesRoman.widthOfTextAtSize(completedText, 14);
    page.drawText(completedText, {
      x: (width - completedWidth) / 2,
      y: height - 265,
      size: 14,
      font: timesRoman,
      color: rgb(0.29, 0.33, 0.39),
    });

    // ── Course Title ──
    const courseTitle = course.title;
    const courseTitleWidth = timesRomanBold.widthOfTextAtSize(courseTitle, 22);
    page.drawText(courseTitle, {
      x: (width - courseTitleWidth) / 2,
      y: height - 310,
      size: 22,
      font: timesRomanBold,
      color: rgb(0.39, 0.4, 0.95),
    });

    // ── Competency Subtext ──
    const compText = 'Demonstrating FAANG & Big-Tech Technical Problem Solving & Industry Competency.';
    const compWidth = helvetica.widthOfTextAtSize(compText, 11);
    page.drawText(compText, {
      x: (width - compWidth) / 2,
      y: height - 345,
      size: 11,
      font: helvetica,
      color: rgb(0.06, 0.72, 0.83),
    });

    // ── Signatures ──
    // Left Signature: Scott Yann
    page.drawLine({ start: { x: 80, y: 130 }, end: { x: 280, y: 130 }, thickness: 1, color: rgb(0.6, 0.6, 0.6) });
    page.drawText('Scott Yann', { x: 140, y: 112, size: 12, font: helveticaBold, color: rgb(0.1, 0.1, 0.2) });
    page.drawText('Platform Author & Creator', { x: 115, y: 96, size: 10, font: helvetica, color: rgb(0.4, 0.4, 0.5) });

    // Right Signature: Google Gemini AI
    page.drawLine({ start: { x: width - 280, y: 130 }, end: { x: width - 80, y: 130 }, thickness: 1, color: rgb(0.6, 0.6, 0.6) });
    page.drawText('Google DeepMind Gemini AI', { x: width - 260, y: 112, size: 12, font: helveticaBold, color: rgb(0.39, 0.4, 0.95) });
    page.drawText('AI Pair-Programming & Pedagogy Lead', { x: width - 275, y: 96, size: 10, font: helvetica, color: rgb(0.4, 0.4, 0.5) });

    // ── Date & Verification Serial ──
    const dateStr = `Issued: ${new Date(certificate.issuedAt).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}`;
    page.drawText(dateStr, {
      x: 60,
      y: 50,
      size: 10,
      font: helvetica,
      color: rgb(0.4, 0.45, 0.53),
    });

    const certNumText = `Verification ID: ${certificate.certificateNumber}`;
    const certNumWidth = helvetica.widthOfTextAtSize(certNumText, 10);
    page.drawText(certNumText, {
      x: width - 60 - certNumWidth,
      y: 50,
      size: 10,
      font: helvetica,
      color: rgb(0.4, 0.45, 0.53),
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
