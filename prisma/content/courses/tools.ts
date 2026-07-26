import type { CategoryDef } from '../types';
import { mcq, trueFalse, quiz, lesson, setupLesson } from '../helpers';

export const goodToKnowCategory: CategoryDef = {
  name: 'Good to Know Tools',
  slug: 'good-to-know',
  description: 'Master mandatory developer workflow tools: Git & GitHub, npm, Webpack & Vite, Docker containers, and Linux CLI.',
  icon: '💡',
  color: '#84cc16',
  sortOrder: 6,
  courses: [
    // ━━━━━━━━━━━━━━━━━━━ GIT & GITHUB ━━━━━━━━━━━━━━━━━━━
    {
      title: 'Git & GitHub',
      slug: 'git-github',
      description: 'Master Git distributed version control, branching strategies, merge conflicts, pull requests, and GitHub Actions CI/CD.',
      difficulty: 'beginner',
      language: 'en',
      estimatedHours: 15,
      resources: [
        { resourceType: 'youtube', title: 'Git and GitHub Course for Beginners', url: 'https://www.youtube.com/watch?v=RGOj5yH7evk', author: 'freeCodeCamp', platform: 'YouTube' },
        { resourceType: 'youtube', title: 'Git Tutorial for Beginners', url: 'https://www.youtube.com/watch?v=8JJ101D3knE', author: 'Programming with Mosh', platform: 'YouTube' },
        { resourceType: 'youtube', title: 'Git in 100 Seconds', url: 'https://www.youtube.com/watch?v=hwP7VQKmPOU', author: 'Fireship', platform: 'YouTube' },
        { resourceType: 'youtube', title: 'Git Branching & Merge Conflicts Explained', url: 'https://www.youtube.com/watch?v=0iGyx_aU7b4', author: 'Traversy Media', platform: 'YouTube' },
        { resourceType: 'youtube', title: 'GitHub Actions CI/CD Pipeline Tutorial', url: 'https://www.youtube.com/watch?v=eB0nUzAI7M8', author: 'TechWorld with Nana', platform: 'YouTube' },
        { resourceType: 'article', title: 'Git Official Documentation & Manual', url: 'https://git-scm.com/doc', author: 'Git SCM' },
        { resourceType: 'ebook', title: 'Pro Git eBook Notes (Free)', url: 'https://git-scm.com/book/en/v2', author: 'Scott Chacon & Ben Straub' },
        { resourceType: 'article', title: 'GitHub Docs & Workflow Guides', url: 'https://docs.github.com/en', author: 'GitHub' },
        { resourceType: 'cheatsheet', title: 'Git Commands & Branching Cheat Sheet', url: 'https://quickref.me/git', author: 'QuickRef' },
        { resourceType: 'article', title: 'GeeksforGeeks Git Tutorials', url: 'https://www.geeksforgeeks.org/git-tutorial/', author: 'GeeksforGeeks' }
      ],
      modules: [
        {
          title: 'Section 1: Version Control Basics',
          lessons: [
            setupLesson('Git & GitHub', 'git-github', 'bash',
              'Check Git installation using `git --version`.',
              'git --version',
              'git --version'
            ),
            lesson('Git Repositories, Staging, & Commits', 'git-repos-commits', '# Git Staging & Commits\n\nInitialize repos with `git init`, stage files with `git add .`, and snapshot changes using `git commit -m "msg"`.', { quiz: quiz('Git Quiz', [mcq('Which command stages all modified files for commit?', 'git add .', ['git stage', 'git push'])]) }),
            lesson('Git Branching, Merging, & Remote Repos', 'git-branching-remote', '# Branching & Remote Repos\n\nCreate branches with `git checkout -b branch-name` and sync with GitHub using `git push origin main`.', { quiz: quiz('Git Branch Quiz', [mcq('What command merges another branch into the current active branch?', 'git merge <branch>', ['git combine', 'git join'])]) })
          ]
        }
      ]
    },

    // ━━━━━━━━━━━━━━━━━━━ NPM & PACKAGE MANAGERS ━━━━━━━━━━━━━━━━━━━
    {
      title: 'npm & Package Managers',
      slug: 'npm-package-managers',
      description: 'Learn Node Package Manager (npm), package.json, semantic versioning, npx, yarn, and pnpm.',
      difficulty: 'beginner',
      language: 'en',
      estimatedHours: 10,
      resources: [
        { resourceType: 'youtube', title: 'npm Crash Course for Beginners', url: 'https://www.youtube.com/watch?v=jHDhaSSKm7U', author: 'Traversy Media', platform: 'YouTube' },
        { resourceType: 'youtube', title: 'npm in 100 Seconds', url: 'https://www.youtube.com/watch?v=Z1RJmh_OqeA', author: 'Fireship', platform: 'YouTube' },
        { resourceType: 'youtube', title: 'npm vs yarn vs pnpm Comparison', url: 'https://www.youtube.com/watch?v=2eebptXfEvw', author: 'Web Dev Simplified', platform: 'YouTube' },
        { resourceType: 'youtube', title: 'package.json & Semantic Versioning Explained', url: 'https://www.youtube.com/watch?v=Anz0ArcQ5xI', author: 'Academind', platform: 'YouTube' },
        { resourceType: 'youtube', title: 'Publishing Your First npm Package', url: 'https://www.youtube.com/watch?v=vVj_T220s7s', author: 'The Net Ninja', platform: 'YouTube' },
        { resourceType: 'article', title: 'npm Official Documentation', url: 'https://docs.npmjs.com/', author: 'npm Inc. / GitHub' },
        { resourceType: 'article', title: 'Yarn Package Manager Documentation', url: 'https://yarnpkg.com/getting-started', author: 'Yarn Core' },
        { resourceType: 'article', title: 'pnpm Fast Disk-Efficient Package Manager', url: 'https://pnpm.io/', author: 'pnpm Core' },
        { resourceType: 'cheatsheet', title: 'npm CLI Commands Cheat Sheet', url: 'https://quickref.me/npm', author: 'QuickRef' },
        { resourceType: 'article', title: 'GeeksforGeeks npm Guide', url: 'https://www.geeksforgeeks.org/node-js-npm-node-package-manager/', author: 'GeeksforGeeks' }
      ],
      modules: [
        {
          title: 'Section 1: Node Package Manager',
          lessons: [
            setupLesson('npm', 'npm-package-managers', 'bash',
              'Check node and npm installed (`npm -v`).',
              'npm -v',
              'npm -v'
            ),
            lesson('Package.json, Dependencies, & Semantic Versioning', 'npm-package-json', '# npm & package.json\n\nInitialize projects with `npm init -y`, install dependencies with `npm install <pkg>`, and understand semver (`^1.2.3`).', { quiz: quiz('npm Quiz', [mcq('What flag saves a package as a development-only dependency?', '--save-dev (-D)', ['--global', '--prod'])]) })
          ]
        }
      ]
    },

    // ━━━━━━━━━━━━━━━━━━━ WEBPACK & VITE ━━━━━━━━━━━━━━━━━━━
    {
      title: 'Webpack & Vite',
      slug: 'webpack-vite',
      description: 'Master modern frontend build tools, module bundlers, HMR (Hot Module Replacement), and code splitting.',
      difficulty: 'intermediate',
      language: 'en',
      estimatedHours: 12,
      resources: [
        { resourceType: 'youtube', title: 'Webpack 5 Full Course', url: 'https://www.youtube.com/watch?v=MpGLUVbqoYQ', author: 'freeCodeCamp', platform: 'YouTube' },
        { resourceType: 'youtube', title: 'Vite in 100 Seconds', url: 'https://www.youtube.com/watch?v=KCrXgy8qtjM', author: 'Fireship', platform: 'YouTube' },
        { resourceType: 'youtube', title: 'Vite Crash Course & Project Setup', url: 'https://www.youtube.com/watch?v=VAeRhkpGfU4', author: 'Traversy Media', platform: 'YouTube' },
        { resourceType: 'youtube', title: 'Webpack vs Vite Module Bundling', url: 'https://www.youtube.com/watch?v=9g0n6S52Jc4', author: 'Jack Herrington', platform: 'YouTube' },
        { resourceType: 'youtube', title: 'ESBuild & Lightning-Fast Bundling', url: 'https://www.youtube.com/watch?v=c3wV0b-qGq8', author: 'Academind', platform: 'YouTube' },
        { resourceType: 'article', title: 'Vite Official Guide & Documentation', url: 'https://vitejs.dev/guide/', author: 'Evan You & Vite Team' },
        { resourceType: 'article', title: 'Webpack Official Documentation', url: 'https://webpack.js.org/concepts/', author: 'Webpack Core' },
        { resourceType: 'ebook', title: 'SurviveJS Webpack Book Notes', url: 'https://survivejs.com/webpack/', author: 'Juho Vepsäläinen' },
        { resourceType: 'cheatsheet', title: 'Webpack & Vite Configuration Cheat Sheet', url: 'https://quickref.me/vite', author: 'QuickRef' },
        { resourceType: 'article', title: 'GeeksforGeeks Webpack Guide', url: 'https://www.geeksforgeeks.org/webpack-tutorial/', author: 'GeeksforGeeks' }
      ],
      modules: [
        {
          title: 'Section 1: Modern Module Bundling',
          lessons: [
            setupLesson('Webpack & Vite', 'webpack-vite', 'javascript',
              'Scaffold a Vite app using `npm create vite@latest`.',
              'console.log("Vite Bundler Active");',
              'console.log("Vite Bundler Active");'
            ),
            lesson('Hot Module Replacement & Bundling', 'vite-hmr-bundling', '# Vite & HMR\n\nVite leverages native ES modules in development for instant startup and Hot Module Replacement.', { quiz: quiz('Vite Quiz', [mcq('What makes Vite significantly faster in development than Webpack?', 'Uses native ES modules without pre-bundling', ['Uses C++ code compiler', 'Disables minification'])]) })
          ]
        }
      ]
    },

    // ━━━━━━━━━━━━━━━━━━━ DOCKER ━━━━━━━━━━━━━━━━━━━
    {
      title: 'Docker',
      slug: 'docker',
      description: 'Master containerization, Dockerfiles, images, Docker Compose, networks, and persistent volumes.',
      difficulty: 'intermediate',
      language: 'en',
      estimatedHours: 20,
      resources: [
        { resourceType: 'youtube', title: 'Docker Course for Beginners', url: 'https://www.youtube.com/watch?v=fqMOX6JJhGo', author: 'TechWorld with Nana', platform: 'YouTube' },
        { resourceType: 'youtube', title: 'Docker Tutorial for Beginners', url: 'https://www.youtube.com/watch?v=pTFZFxd4hOI', author: 'Programming with Mosh', platform: 'YouTube' },
        { resourceType: 'youtube', title: 'Docker in 100 Seconds', url: 'https://www.youtube.com/watch?v=Gjnup-Juv0c', author: 'Fireship', platform: 'YouTube' },
        { resourceType: 'youtube', title: 'Docker Compose Crash Course', url: 'https://www.youtube.com/watch?v=HG6yIjZapSA', author: 'Traversy Media', platform: 'YouTube' },
        { resourceType: 'youtube', title: 'Dockerizing Full Stack Apps', url: 'https://www.youtube.com/watch?v=0T4mYf9m5M8', author: 'Web Dev Simplified', platform: 'YouTube' },
        { resourceType: 'article', title: 'Docker Official Documentation', url: 'https://docs.docker.com/', author: 'Docker Inc.' },
        { resourceType: 'article', title: 'Docker Curriculum Interactive Tutorial', url: 'https://docker-curriculum.com/', author: 'Prakhar Srivastav' },
        { resourceType: 'ebook', title: 'Docker Deep Dive eBook Notes', url: 'https://nigelpoulton.com/books/docker-deep-dive/', author: 'Nigel Poulton' },
        { resourceType: 'cheatsheet', title: 'Docker & Docker Compose Commands Cheat Sheet', url: 'https://quickref.me/docker', author: 'QuickRef' },
        { resourceType: 'article', title: 'GeeksforGeeks Docker Tutorials', url: 'https://www.geeksforgeeks.org/docker-tutorial/', author: 'GeeksforGeeks' }
      ],
      modules: [
        {
          title: 'Section 1: Docker Containers',
          lessons: [
            setupLesson('Docker', 'docker', 'shell',
              'Install Docker Desktop (`docker --version`).',
              'docker --version',
              'docker --version'
            ),
            lesson('Dockerfiles, Images, & Docker Compose', 'docker-images-compose', '# Dockerfiles & Compose\n\nBuild isolated container images using `Dockerfile` and orchestrate multi-container services with `docker-compose.yml`.', { quiz: quiz('Docker Quiz', [mcq('Which file defines multi-container service configurations?', 'docker-compose.yml', ['Dockerfile', 'docker.env'])]) })
          ]
        }
      ]
    },

    // ━━━━━━━━━━━━━━━━━━━ LINUX COMMAND LINE ━━━━━━━━━━━━━━━━━━━
    {
      title: 'Linux Command Line',
      slug: 'linux-command-line',
      description: 'Master Linux CLI, bash commands, file permissions, process management, SSH, and system administration.',
      difficulty: 'beginner',
      language: 'en',
      estimatedHours: 15,
      resources: [
        { resourceType: 'youtube', title: 'Linux Terminal Course for Beginners', url: 'https://www.youtube.com/watch?v=wBp0Rb-ZJak', author: 'freeCodeCamp', platform: 'YouTube' },
        { resourceType: 'youtube', title: 'Linux Command Line Tutorial', url: 'https://www.youtube.com/watch?v=ivYL72j4zI0', author: 'NetworkChuck', platform: 'YouTube' },
        { resourceType: 'youtube', title: 'Linux in 100 Seconds', url: 'https://www.youtube.com/watch?v=rrB13utjYV4', author: 'Fireship', platform: 'YouTube' },
        { resourceType: 'youtube', title: 'Linux Permissions & chmod Explained', url: 'https://www.youtube.com/watch?v=vVj_T220s7s', author: 'Traversy Media', platform: 'YouTube' },
        { resourceType: 'youtube', title: 'SSH & Remote Server Administration', url: 'https://www.youtube.com/watch?v=hQWRp-fHO04', author: 'LearnLinuxTV', platform: 'YouTube' },
        { resourceType: 'article', title: 'Linux Command Line Official Guide', url: 'https://linuxcommand.org/', author: 'William Shotts' },
        { resourceType: 'article', title: 'Ubuntu Official Documentation', url: 'https://help.ubuntu.com/', author: 'Canonical' },
        { resourceType: 'ebook', title: 'The Linux Command Line Free eBook', url: 'https://linuxcommand.org/tlcl.php', author: 'William E. Shotts Jr.' },
        { resourceType: 'cheatsheet', title: 'Linux CLI Commands & Permission Cheat Sheet', url: 'https://quickref.me/linux', author: 'QuickRef' },
        { resourceType: 'article', title: 'GeeksforGeeks Linux Commands Portal', url: 'https://www.geeksforgeeks.org/linux-commands/', author: 'GeeksforGeeks' }
      ],
      modules: [
        {
          title: 'Section 1: Linux CLI Mastery',
          lessons: [
            setupLesson('Linux CLI', 'linux-command-line', 'bash',
              'Open Linux terminal or WSL (Windows Subsystem for Linux).',
              'uname -a',
              'uname -a'
            ),
            lesson('File System Navigation & Permissions', 'linux-file-permissions', '# Navigation & Permissions\n\nNavigate directories (`cd`, `ls -la`), inspect files (`cat`, `less`), and set permissions using `chmod 755 file`.', { quiz: quiz('Linux Quiz', [mcq('What numeric value grants read, write, and execute permissions in chmod?', '7', ['5', '6'])]) })
          ]
        }
      ]
    }
  ]
};
