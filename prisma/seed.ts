import { PrismaClient } from '@prisma/client';
import { ALL_CATEGORIES } from './content';
import { countLessons } from './content/helpers';

const prisma = new PrismaClient();

async function main() {
  console.log('Clearing database...');
  await prisma.attemptAnswer.deleteMany();
  await prisma.quizAttempt.deleteMany();
  await prisma.userProgress.deleteMany();
  await prisma.courseResource.deleteMany();
  await prisma.answer.deleteMany();
  await prisma.question.deleteMany();
  await prisma.quiz.deleteMany();
  await prisma.lesson.deleteMany();
  await prisma.module.deleteMany();
  await prisma.course.deleteMany();
  await prisma.category.deleteMany();

  console.log('Seeding categories and courses...');

  for (const category of ALL_CATEGORIES) {
    const createdCat = await prisma.category.create({
      data: {
        name: category.name,
        slug: category.slug,
        description: category.description,
        icon: category.icon,
        color: category.color,
        sortOrder: category.sortOrder,
      },
    });

    for (const courseDef of category.courses) {
      const totalLessons = countLessons(courseDef.modules);

      const course = await prisma.course.create({
        data: {
          categoryId: createdCat.id,
          title: courseDef.title,
          slug: courseDef.slug,
          description: courseDef.description,
          difficulty: courseDef.difficulty,
          language: 'en',
          estimatedHours: courseDef.estimatedHours,
          totalLessons,
        },
      });

      if (courseDef.resources) {
        for (let i = 0; i < courseDef.resources.length; i++) {
          const res = courseDef.resources[i];
          await prisma.courseResource.create({
            data: {
              courseId: course.id,
              resourceType: res.resourceType,
              title: res.title,
              url: res.url,
              author: res.author,
              platform: res.platform,
              sortOrder: i + 1,
            },
          });
        }
      }

      for (let m = 0; m < courseDef.modules.length; m++) {
        const modDef = courseDef.modules[m];
        const mod = await prisma.module.create({
          data: {
            courseId: course.id,
            title: modDef.title,
            description: modDef.description,
            sortOrder: m + 1,
          },
        });

        for (let l = 0; l < modDef.lessons.length; l++) {
          const lessonDef = modDef.lessons[l];
          const lesson = await prisma.lesson.create({
            data: {
              moduleId: mod.id,
              title: lessonDef.title,
              slug: lessonDef.slug,
              contentMarkdown: lessonDef.contentMarkdown,
              starterCode: lessonDef.starterCode,
              solutionCode: lessonDef.solutionCode,
              codeLanguage: lessonDef.codeLanguage,
              sortOrder: l + 1,
              estimatedMinutes: lessonDef.estimatedMinutes ?? 20,
              xpReward: lessonDef.xpReward ?? 50,
            },
          });

          const quizDef = lessonDef.quiz;
          const quiz = await prisma.quiz.create({
            data: { lessonId: lesson.id, title: quizDef.title },
          });

          for (let q = 0; q < quizDef.questions.length; q++) {
            const qDef = quizDef.questions[q];
            const question = await prisma.question.create({
              data: {
                quizId: quiz.id,
                questionText: qDef.questionText,
                questionType: qDef.questionType ?? 'multiple_choice',
                codeSnippet: qDef.codeSnippet,
                explanation: qDef.explanation,
                sortOrder: q + 1,
              },
            });

            for (let a = 0; a < qDef.answers.length; a++) {
              const ans = qDef.answers[a];
              await prisma.answer.create({
                data: {
                  questionId: question.id,
                  answerText: ans.text,
                  isCorrect: ans.isCorrect,
                  sortOrder: a + 1,
                },
              });
            }
          }
        }
      }
    }
  }

  console.log('Seeding complete!');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
