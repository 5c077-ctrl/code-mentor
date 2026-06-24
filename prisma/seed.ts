import { PrismaClient } from '@prisma/client';

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

  console.log('Seeding categories...');
  const catProgramming = await prisma.category.create({
    data: { name: 'Programming', slug: 'programming', description: 'Core programming languages', icon: 'Code', color: '#3b82f6', sortOrder: 1 }
  });
  const catWebDev = await prisma.category.create({
    data: { name: 'Web Development', slug: 'web-development', description: 'Build for the web', icon: 'Globe', color: '#eab308', sortOrder: 2 }
  });
  const catDevOps = await prisma.category.create({
    data: { name: 'DevOps & Tools', slug: 'devops-tools', description: 'Deployment and version control', icon: 'Terminal', color: '#f97316', sortOrder: 3 }
  });

  console.log('Seeding courses...');
  // Python Course
  const pythonCourse = await prisma.course.create({
    data: {
      categoryId: catProgramming.id,
      title: 'Python for Beginners',
      slug: 'python-for-beginners',
      description: 'Learn the basics of Python programming from scratch.',
      difficulty: 'beginner',
      language: 'en',
      estimatedHours: 10,
      totalLessons: 15,
    }
  });

  // Python Modules & Lessons
  const pyMod1 = await prisma.module.create({
    data: { courseId: pythonCourse.id, title: 'Module 1: Introduction', sortOrder: 1 }
  });

  const pyLesson1 = await prisma.lesson.create({
    data: {
      moduleId: pyMod1.id,
      title: 'Hello World in Python',
      slug: 'hello-world-in-python',
      contentMarkdown: 'Welcome to your first Python lesson! The tradition of programming dictates that your first program should print "Hello, World!" to the screen.\n\nIn Python, we use the `print()` function to output text. Text in Python is called a "string" and is enclosed in quotation marks.',
      starterCode: 'print("Hello, World!")',
      solutionCode: 'print("Hello, World!")',
      codeLanguage: 'python',
      sortOrder: 1,
      estimatedMinutes: 10,
      xpReward: 50,
    }
  });

  // Python Quiz
  const pyQuiz = await prisma.quiz.create({
    data: { lessonId: pyLesson1.id, title: 'Python Basics Quiz' }
  });

  const pyQ1 = await prisma.question.create({
    data: { quizId: pyQuiz.id, questionText: 'Which function outputs text in Python?', questionType: 'multiple_choice', sortOrder: 1 }
  });
  await prisma.answer.create({ data: { questionId: pyQ1.id, answerText: 'echo()', isCorrect: false, sortOrder: 1 } });
  await prisma.answer.create({ data: { questionId: pyQ1.id, answerText: 'print()', isCorrect: true, sortOrder: 2 } });
  await prisma.answer.create({ data: { questionId: pyQ1.id, answerText: 'write()', isCorrect: false, sortOrder: 3 } });

  // Resources
  await prisma.courseResource.create({
    data: { courseId: pythonCourse.id, resourceType: 'video', title: 'Python in 100 Seconds', url: 'https://youtube.com', author: 'Fireship', platform: 'YouTube', sortOrder: 1 }
  });


  // JS Course
  const jsCourse = await prisma.course.create({
    data: {
      categoryId: catWebDev.id,
      title: 'Advanced JavaScript',
      slug: 'advanced-javascript',
      description: 'Deep dive into closures, async/await, and prototypes.',
      difficulty: 'advanced',
      language: 'en',
      estimatedHours: 15,
      totalLessons: 20,
    }
  });

  const jsMod1 = await prisma.module.create({
    data: { courseId: jsCourse.id, title: 'Module 1: Scope & Closures', sortOrder: 1 }
  });

  await prisma.lesson.create({
    data: {
      moduleId: jsMod1.id,
      title: 'Understanding Closures',
      slug: 'understanding-closures',
      contentMarkdown: 'A closure is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment).',
      starterCode: 'function makeFunc() {\n  const name = "Mozilla";\n  function displayName() {\n    console.log(name);\n  }\n  return displayName;\n}\n\nconst myFunc = makeFunc();\nmyFunc();',
      solutionCode: 'function makeFunc() {\n  const name = "Mozilla";\n  function displayName() {\n    console.log(name);\n  }\n  return displayName;\n}\n\nconst myFunc = makeFunc();\nmyFunc();',
      codeLanguage: 'javascript',
      sortOrder: 1,
      estimatedMinutes: 20,
      xpReward: 100,
    }
  });

  // Git Course
  const gitCourse = await prisma.course.create({
    data: {
      categoryId: catDevOps.id,
      title: 'Git Mastery',
      slug: 'git-mastery',
      description: 'Master version control, rebasing, and workflows.',
      difficulty: 'intermediate',
      language: 'en',
      estimatedHours: 8,
      totalLessons: 12,
    }
  });

  const gitMod1 = await prisma.module.create({
    data: { courseId: gitCourse.id, title: 'Module 1: Version Control Basics', sortOrder: 1 }
  });

  await prisma.lesson.create({
    data: {
      moduleId: gitMod1.id,
      title: 'Initializing a Repository',
      slug: 'initializing-a-repository',
      contentMarkdown: 'To start versioning your project with Git, you need to initialize a repository using `git init`.',
      starterCode: '# Run the git init command\n',
      solutionCode: 'git init',
      codeLanguage: 'bash',
      sortOrder: 1,
      estimatedMinutes: 10,
      xpReward: 50,
    }
  });

  // Generate 27 more dummy courses to reach 30+ courses
  for (let i = 4; i <= 30; i++) {
    await prisma.course.create({
      data: {
        categoryId: catProgramming.id,
        title: `Dummy Course ${i}`,
        slug: `dummy-course-${i}`,
        description: `This is an auto-generated dummy course number ${i}.`,
        difficulty: 'beginner',
        language: 'en',
        estimatedHours: 5,
        totalLessons: 10,
      }
    });
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
