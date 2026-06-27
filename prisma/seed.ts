import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const CATEGORIES = [
  { name: 'Programming', slug: 'programming', description: 'Core programming languages', icon: 'Code', color: '#3b82f6', sortOrder: 1 },
  { name: 'Web Development', slug: 'web-development', description: 'Build for the web', icon: 'Globe', color: '#eab308', sortOrder: 2 },
  { name: 'DevOps & Tools', slug: 'devops-tools', description: 'Deployment and version control', icon: 'Terminal', color: '#f97316', sortOrder: 3 },
  { name: 'Databases', slug: 'databases', description: 'Data storage and management', icon: 'Database', color: '#8b5cf6', sortOrder: 4 },
  { name: 'Ethical Hacking', slug: 'ethical-hacking', description: 'Security and penetration testing', icon: 'Shield', color: '#ef4444', sortOrder: 5 },
  { name: 'AI & ML', slug: 'ai-ml', description: 'Artificial Intelligence and Machine Learning', icon: 'Brain', color: '#10b981', sortOrder: 6 },
  { name: 'Mobile Dev', slug: 'mobile-dev', description: 'iOS and Android app development', icon: 'Smartphone', color: '#ec4899', sortOrder: 7 },
  { name: 'Cloud & Infrastructure', slug: 'cloud-infrastructure', description: 'AWS, Azure, and Google Cloud', icon: 'Cloud', color: '#0ea5e9', sortOrder: 8 },
];

const COURSE_TEMPLATES: Record<string, { title: string; slug: string; desc: string; diff: string; lang: string }[]> = {
  'programming': [
    { title: 'Python for Beginners', slug: 'python-for-beginners', desc: 'Learn the basics of Python programming from scratch.', diff: 'beginner', lang: 'python' },
    { title: 'Java Fundamentals', slug: 'java-fundamentals', desc: 'Master object-oriented programming with Java.', diff: 'intermediate', lang: 'java' },
    { title: 'C++ Essentials', slug: 'cpp-essentials', desc: 'Deep dive into C++ and memory management.', diff: 'advanced', lang: 'cpp' },
    { title: 'C# Basics', slug: 'csharp-basics', desc: 'Learn C# for .NET and game development.', diff: 'beginner', lang: 'csharp' },
    { title: 'Rust Programming', slug: 'rust-programming', desc: 'Safe systems programming with Rust.', diff: 'advanced', lang: 'rust' },
    { title: 'Go Language', slug: 'go-language', desc: 'Concurrent programming with Google\'s Go.', diff: 'intermediate', lang: 'go' },
    { title: 'Ruby Basics', slug: 'ruby-basics', desc: 'Elegant and expressive programming with Ruby.', diff: 'beginner', lang: 'ruby' },
    { title: 'Kotlin Fundamentals', slug: 'kotlin-fundamentals', desc: 'Modern language for the JVM and Android.', diff: 'intermediate', lang: 'kotlin' },
    { title: 'Swift Programming', slug: 'swift-programming', desc: 'Build iOS apps using Swift.', diff: 'intermediate', lang: 'swift' }
  ],
  'web-development': [
    { title: 'HTML & CSS Mastery', slug: 'html-css-mastery', desc: 'Build beautiful and responsive websites.', diff: 'beginner', lang: 'html' },
    { title: 'Advanced JavaScript', slug: 'advanced-javascript', desc: 'Deep dive into closures, async/await, and prototypes.', diff: 'advanced', lang: 'javascript' },
    { title: 'React.js Complete Guide', slug: 'react-js-complete-guide', desc: 'Build modern UIs with React.', diff: 'intermediate', lang: 'javascript' },
    { title: 'Node.js Backend Dev', slug: 'node-js-backend-dev', desc: 'Scalable backends with Node and Express.', diff: 'intermediate', lang: 'javascript' },
    { title: 'TypeScript Deep Dive', slug: 'typescript-deep-dive', desc: 'Type-safe JavaScript development.', diff: 'advanced', lang: 'typescript' },
    { title: 'Next.js Full-Stack', slug: 'nextjs-full-stack', desc: 'Production-ready React framework.', diff: 'advanced', lang: 'typescript' }
  ],
  'devops-tools': [
    { title: 'Git Mastery', slug: 'git-mastery', desc: 'Master version control, rebasing, and workflows.', diff: 'intermediate', lang: 'bash' },
    { title: 'Docker Essentials', slug: 'docker-essentials', desc: 'Containerize your applications with Docker.', diff: 'intermediate', lang: 'yaml' },
    { title: 'Linux Command Line', slug: 'linux-command-line', desc: 'Navigate and manage Linux systems.', diff: 'beginner', lang: 'bash' },
    { title: 'CI/CD Pipelines', slug: 'ci-cd-pipelines', desc: 'Automate testing and deployment.', diff: 'advanced', lang: 'yaml' }
  ],
  'databases': [
    { title: 'SQL Fundamentals', slug: 'sql-fundamentals', desc: 'Query and manipulate relational databases.', diff: 'beginner', lang: 'sql' },
    { title: 'MongoDB & NoSQL', slug: 'mongodb-nosql', desc: 'Flexible document databases with MongoDB.', diff: 'intermediate', lang: 'javascript' },
    { title: 'PostgreSQL Advanced', slug: 'postgresql-advanced', desc: 'Advanced queries and performance tuning.', diff: 'advanced', lang: 'sql' },
    { title: 'Redis Caching', slug: 'redis-caching', desc: 'In-memory data structure store.', diff: 'intermediate', lang: 'bash' }
  ],
  'ethical-hacking': [
    { title: 'Ethical Hacking Fundamentals', slug: 'ethical-hacking-fundamentals', desc: 'Introduction to cybersecurity and penetration testing.', diff: 'beginner', lang: 'bash' },
    { title: 'Network Security', slug: 'network-security', desc: 'Secure networks against vulnerabilities.', diff: 'intermediate', lang: 'bash' },
    { title: 'Web App Penetration Testing', slug: 'web-app-penetration-testing', desc: 'Find and exploit web vulnerabilities.', diff: 'advanced', lang: 'bash' }
  ],
  'ai-ml': [
    { title: 'Machine Learning Basics', slug: 'machine-learning-basics', desc: 'Intro to algorithms and models.', diff: 'beginner', lang: 'python' },
    { title: 'Deep Learning with Python', slug: 'deep-learning-with-python', desc: 'Neural networks with TensorFlow and PyTorch.', diff: 'advanced', lang: 'python' },
    { title: 'Natural Language Processing', slug: 'nlp-basics', desc: 'Process and analyze human language.', diff: 'intermediate', lang: 'python' }
  ],
  'mobile-dev': [
    { title: 'React Native Mobile Apps', slug: 'react-native-mobile', desc: 'Cross-platform apps with React Native.', diff: 'intermediate', lang: 'javascript' },
    { title: 'Flutter App Development', slug: 'flutter-app-development', desc: 'Beautiful UIs with Flutter and Dart.', diff: 'intermediate', lang: 'dart' }
  ],
  'cloud-infrastructure': [
    { title: 'AWS Cloud Practitioner', slug: 'aws-cloud-practitioner', desc: 'Foundations of Amazon Web Services.', diff: 'beginner', lang: 'bash' },
    { title: 'Azure Fundamentals', slug: 'azure-fundamentals', desc: 'Introduction to Microsoft Azure cloud services.', diff: 'beginner', lang: 'bash' }
  ]
};

const RESOURCES = [
  { title: 'Traversy Media', url: 'https://youtube.com/c/TraversyMedia', author: 'Brad Traversy', platform: 'YouTube', resourceType: 'youtube' },
  { title: 'Fireship', url: 'https://youtube.com/c/Fireship', author: 'Jeff Delaney', platform: 'YouTube', resourceType: 'youtube' },
  { title: 'freeCodeCamp', url: 'https://youtube.com/c/Freecodecamp', author: 'Quincy Larson', platform: 'YouTube', resourceType: 'youtube' },
  { title: 'The Coding Train', url: 'https://youtube.com/c/TheCodingTrain', author: 'Daniel Shiffman', platform: 'YouTube', resourceType: 'youtube' },
];

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
  const catMap = new Map();
  for (const cat of CATEGORIES) {
    const createdCat = await prisma.category.create({ data: cat });
    catMap.set(cat.slug, createdCat.id);
  }

  console.log('Seeding courses, modules, lessons, and quizzes...');
  
  for (const [catSlug, courses] of Object.entries(COURSE_TEMPLATES)) {
    const categoryId = catMap.get(catSlug);
    if (!categoryId) continue;

    for (const c of courses) {
      const course = await prisma.course.create({
        data: {
          categoryId,
          title: c.title,
          slug: c.slug,
          description: c.desc,
          difficulty: c.diff,
          language: 'en',
          estimatedHours: Math.floor(Math.random() * 10) + 5,
          totalLessons: 12,
        }
      });

      // Course Resources
      const shuffledResources = RESOURCES.sort(() => 0.5 - Math.random()).slice(0, 2);
      for (let i = 0; i < shuffledResources.length; i++) {
        const res = shuffledResources[i];
        await prisma.courseResource.create({
          data: {
            courseId: course.id,
            resourceType: res.resourceType,
            title: res.title,
            url: res.url,
            author: res.author,
            platform: res.platform,
            sortOrder: i + 1,
          }
        });
      }

      // Requirements Module (First Module)
      const reqMod = await prisma.module.create({
        data: { courseId: course.id, title: 'Module 1: Requirements & Installation', sortOrder: 1 }
      });

      const reqLesson = await prisma.lesson.create({
        data: {
          moduleId: reqMod.id,
          title: 'Installation & Setup',
          slug: `installation-setup-${c.slug}`,
          contentMarkdown: `Welcome to **${c.title}**!\n\nBefore we begin coding, let's make sure you have the right tools installed on your computer.\n\n### Requirements\n- A modern web browser\n- A text editor like VS Code\n- Command-line interface access\n\n### Installation\n1. Download the required SDK/Runtime for ${c.lang}.\n2. Install it on your machine.\n3. Verify the installation by running the version command in your terminal.`,
          starterCode: `// Verify your installation\n// Run the version command for ${c.lang}`,
          solutionCode: `// Installation verified!`,
          codeLanguage: c.lang,
          sortOrder: 1,
          estimatedMinutes: 15,
          xpReward: 20,
        }
      });

      await createQuiz(reqLesson.id, `Setup Quiz for ${c.title}`);

      // Content Modules
      for (let m = 2; m <= 4; m++) {
        const mod = await prisma.module.create({
          data: { courseId: course.id, title: `Module ${m}: Core Concepts ${m - 1}`, sortOrder: m }
        });

        for (let l = 1; l <= 3; l++) {
          const lesson = await prisma.lesson.create({
            data: {
              moduleId: mod.id,
              title: `Lesson ${l}: Exploring ${c.lang} Part ${m}-${l}`,
              slug: `lesson-${l}-exploring-${c.lang}-part-${m}-${l}-${course.id}`,
              contentMarkdown: `In this lesson, we will explore core concepts of **${c.title}**.\n\nHere is an example snippet:\n\n\`\`\`${c.lang}\n// Example code\n\`\`\`\n\nNow try it yourself in the editor!`,
              starterCode: `// Write your ${c.lang} code here\n`,
              solutionCode: `// Completed ${c.lang} code\n`,
              codeLanguage: c.lang,
              sortOrder: l,
              estimatedMinutes: 20,
              xpReward: 50,
            }
          });

          await createQuiz(lesson.id, `${c.title} Module ${m} Lesson ${l} Quiz`);
        }
      }
    }
  }

  console.log('Seeding complete!');
}

async function createQuiz(lessonId: string, title: string) {
  const quiz = await prisma.quiz.create({
    data: { lessonId, title }
  });

  const q1 = await prisma.question.create({
    data: { quizId: quiz.id, questionText: 'Which of the following is correct?', questionType: 'multiple_choice', sortOrder: 1 }
  });
  await prisma.answer.create({ data: { questionId: q1.id, answerText: 'This one is wrong', isCorrect: false, sortOrder: 1 } });
  await prisma.answer.create({ data: { questionId: q1.id, answerText: 'This is the correct answer', isCorrect: true, sortOrder: 2 } });
  await prisma.answer.create({ data: { questionId: q1.id, answerText: 'Another wrong one', isCorrect: false, sortOrder: 3 } });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
