import { NextResponse } from 'next/server';
import { PDFDocument, rgb, StandardFonts } from 'pdf-lib';
import { getSession } from '@/lib/auth';
import { prisma } from '@/lib/prisma';

export async function POST(req: Request) {
  try {
    const session = await getSession();
    if (!session) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

    const { courseId } = await req.json();

    const user = await prisma.user.findUnique({ where: { id: session.userId as string } });
    const course = await prisma.course.findUnique({ where: { id: courseId } });

    if (!user || !course) {
      return NextResponse.json({ error: 'Data not found' }, { status: 404 });
    }

    // Create a simple PDF certificate
    const pdfDoc = await PDFDocument.create();
    const page = pdfDoc.addPage([600, 400]);
    const { width, height } = page.getSize();
    
    const timesRomanFont = await pdfDoc.embedFont(StandardFonts.TimesRoman);
    const timesRomanBoldFont = await pdfDoc.embedFont(StandardFonts.TimesRomanBold);

    page.drawText('Certificate of Completion', {
      x: width / 2 - 150,
      y: height - 80,
      size: 28,
      font: timesRomanBoldFont,
      color: rgb(0, 0.3, 0.8),
    });

    page.drawText('This certifies that', {
      x: width / 2 - 70,
      y: height - 130,
      size: 16,
      font: timesRomanFont,
    });

    page.drawText(user.username.toUpperCase(), {
      x: width / 2 - (user.username.length * 8), // rough centering
      y: height - 180,
      size: 24,
      font: timesRomanBoldFont,
      color: rgb(0, 0, 0),
    });

    page.drawText('has successfully completed the course', {
      x: width / 2 - 120,
      y: height - 230,
      size: 16,
      font: timesRomanFont,
    });

    page.drawText(course.title, {
      x: width / 2 - (course.title.length * 6), // rough centering
      y: height - 280,
      size: 20,
      font: timesRomanBoldFont,
      color: rgb(0.1, 0.5, 0.1),
    });

    const pdfBytes = await pdfDoc.save();

    return new Response(pdfBytes as any, {
      status: 200,
      headers: {
        'Content-Type': 'application/pdf',
        'Content-Disposition': `attachment; filename="certificate-${course.slug}.pdf"`,
      },
    });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to generate certificate' }, { status: 500 });
  }
}
