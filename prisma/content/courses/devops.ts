import type { CategoryDef } from '../types';
import { mcq, trueFalse, quiz, lesson, setupLesson } from '../helpers';

export const devopsCategory: CategoryDef = {
  name: 'DevOps & Tools',
  slug: 'devops',
  description: 'Master Git, Docker, CI/CD pipelines, and the Linux command line for modern development workflows.',
  icon: '⚙️',
  color: '#f59e0b',
  sortOrder: 3,
  courses: [
    // ━━━━━━━━━━━━━━━━━━━ GIT & GITHUB MASTERY ━━━━━━━━━━━━━━━━━━━
    {
      title: 'Git & GitHub Mastery',
      slug: 'git-github-mastery',
      description: 'Learn version control from first commit to advanced workflows — branching, merging, rebasing, pull requests, and team collaboration.',
      difficulty: 'beginner',
      language: 'en',
      estimatedHours: 12,
      resources: [
        { resourceType: 'youtube', title: 'Git & GitHub Crash Course', url: 'https://www.youtube.com/watch?v=RGOj5yH7evk', author: 'Traversy Media', platform: 'YouTube' },
        { resourceType: 'youtube', title: 'Git for Professionals Tutorial', url: 'https://www.youtube.com/watch?v=Usxj_BminCI', author: 'freeCodeCamp', platform: 'YouTube' },
        { resourceType: 'youtube', title: 'Git Branching & Merging Deep Dive', url: 'https://www.youtube.com/watch?v=FyAAIHHClqI', author: 'Fireship', platform: 'YouTube' },
        { resourceType: 'youtube', title: 'Interactive Git Rebase & Bisect', url: 'https://www.youtube.com/watch?v=2eZsM84aOsk', author: 'Corey Schafer', platform: 'YouTube' },
        { resourceType: 'youtube', title: 'GitHub Actions & Workflows Explained', url: 'https://www.youtube.com/watch?v=eB0nUzAI7M8', author: 'TechWorld with Nana', platform: 'YouTube' },
        { resourceType: 'ebook', title: 'Pro Git Book (Official Free eBook)', url: 'https://git-scm.com/book/en/v2', author: 'Scott Chacon' },
        { resourceType: 'article', title: 'Atlassian Git Tutorials & Workflows', url: 'https://www.atlassian.com/git/tutorials', author: 'Atlassian' },
        { resourceType: 'cheatsheet', title: 'GitHub Education Git Cheat Sheet', url: 'https://education.github.com/git-cheat-sheet-education.pdf', author: 'GitHub' },
        { resourceType: 'article', title: 'Git Flight Rules for When Things Go Wrong', url: 'https://github.com/k88hudson/git-flight-rules', author: 'k88hudson' },
        { resourceType: 'cheatsheet', title: 'Interactive Learn Git Branching', url: 'https://learngitbranching.js.org/', author: 'Open Source' },
      ],
      modules: [
        {
          title: 'Module 1: Version Control Basics',
          lessons: [
            setupLesson('Git & GitHub Mastery', 'git-github-mastery', 'bash',
              `1. Download Git from [git-scm.com](https://git-scm.com/)\n2. Verify installation: \`git --version\`\n3. Configure name: \`git config --global user.name "Your Name"\`\n4. Configure email: \`git config --global user.email "you@example.com"\``,
              `# Check Git installation\ngit --version\ngit config --list`,
              `git --version\ngit config --list`
            ),
            lesson('Repository Initialization (`git init`)', 'git-init', `# Init Repository\n\nInitialize a project with \`git init\` to start tracking changes.`, {
              starterCode: `mkdir project && cd project\ngit init\ngit status`,
              solutionCode: `mkdir project && cd project\ngit init\ngit status`,
              codeLanguage: 'bash',
              quiz: quiz('Git Init Quiz', [
                mcq('What does `git init` do?', 'Creates a hidden .git directory to track changes', ['Uploads code to GitHub', 'Installs Git'], '`git init` initializes a new local Git repository.'),
                trueFalse('`git init` requires an internet connection.', false, 'Git operates locally on your machine.'),
              ]),
            }),
            lesson('Staging & Committing (`git add`, `git commit`)', 'git-add-commit', `# Staging & Committing\n\nStage changes with \`git add\` and create snapshots with \`git commit -m "msg"\`.`, {
              starterCode: `git add .\ngit commit -m "feat: initial commit"\ngit log --oneline`,
              solutionCode: `git add .\ngit commit -m "feat: initial commit"\ngit log --oneline`,
              codeLanguage: 'bash',
              quiz: quiz('Staging Quiz', [
                mcq('What does `git add .` do?', 'Stages all changes in current directory', ['Commits changes', 'Pushes code'], '`git add .` adds all modified files to the staging area.'),
              ]),
            }),
            lesson('Understanding Git Status & Diffs', 'git-status-diff', `# Status & Diffs\n\nUse \`git status\` to check file states and \`git diff\` to view modifications line-by-line.`, {
              starterCode: `git status\ngit diff`,
              solutionCode: `git status\ngit diff`,
              codeLanguage: 'bash',
              quiz: quiz('Git Diff Quiz', [
                mcq('Which command shows unstaged line changes?', 'git diff', ['git log', 'git status'], '`git diff` highlights unstaged line-level changes.'),
              ]),
            }),
            lesson('Ignoring Files (`.gitignore`)', 'git-ignore', `# .gitignore\n\nSpecify patterns for untracked files that Git should ignore (e.g. \`node_modules/\`, \`.env\`).`, {
              starterCode: `echo "node_modules/" >> .gitignore\necho ".env" >> .gitignore\ngit status`,
              solutionCode: `echo "node_modules/" >> .gitignore\necho ".env" >> .gitignore\ngit status`,
              codeLanguage: 'bash',
              quiz: quiz('Gitignore Quiz', [
                mcq('Where should API secret keys be listed?', 'Inside .gitignore file', ['Inside README.md', 'Committed to main'], 'Secrets should never be committed to Git.'),
              ]),
            }),
          ]
        },
        {
          title: 'Module 2: Branching & Merging',
          lessons: [
            lesson('Creating & Switching Branches', 'git-branching', `# Branching Basics\n\nCreate feature branches with \`git branch <name>\` and switch with \`git checkout\` or \`git switch\`.`, {
              starterCode: `git branch feature-auth\ngit checkout feature-auth\ngit branch`,
              solutionCode: `git branch feature-auth\ngit checkout feature-auth\ngit branch`,
              codeLanguage: 'bash',
              quiz: quiz('Branch Quiz', [
                mcq('Which command creates AND switches to a new branch?', 'git checkout -b <name>', ['git branch <name>', 'git merge <name>'], '`checkout -b` creates and switches in one step.'),
              ]),
            }),
            lesson('Merging Branches (`git merge`)', 'git-merge', `# Merging\n\nCombine changes from a feature branch into main with \`git merge\`.`, {
              starterCode: `git checkout main\ngit merge feature-auth`,
              solutionCode: `git checkout main\ngit merge feature-auth`,
              codeLanguage: 'bash',
              quiz: quiz('Merge Quiz', [
                mcq('Where should you be checked out when running `git merge feature`?', 'The target destination branch (e.g. main)', ['The feature branch', 'Any random commit'], 'You merge changes INTO your current active branch.'),
              ]),
            }),
            lesson('Resolving Merge Conflicts', 'git-merge-conflicts', `# Resolving Conflicts\n\nUnderstand conflict markers (\`<<<<<<<\`, \`=======\`, \`>>>>>>>\`) and resolve them safely.`, {
              starterCode: `git status\n# Edit conflict file then:\ngit add file.txt\ngit commit -m "fix: resolve merge conflict"`,
              solutionCode: `git status\ngit add file.txt\ngit commit -m "fix: resolve merge conflict"`,
              codeLanguage: 'bash',
              quiz: quiz('Conflicts Quiz', [
                trueFalse('Merge conflicts occur when two branches modify the same lines of a file.', true, 'Git requires human intervention to resolve overlapping line edits.'),
              ]),
            }),
            lesson('Rebasing vs Merging (`git rebase`)', 'git-rebase', `# Rebasing\n\nRebase commits onto another base tip for a linear history.`, {
              starterCode: `git checkout feature\ngit rebase main`,
              solutionCode: `git checkout feature\ngit rebase main`,
              codeLanguage: 'bash',
              quiz: quiz('Rebase Quiz', [
                mcq('Why use rebase over merge?', 'To maintain a clean, linear commit log', ['To delete commits', 'To bypass tests'], 'Rebasing avoids extra merge commits in history.'),
              ]),
            }),
            lesson('Stashing Uncommitted Changes (`git stash`)', 'git-stash', `# Git Stash\n\nTemporarily shelve uncommitted work with \`git stash\` and restore with \`git stash pop\`.`, {
              starterCode: `git stash\ngit stash list\ngit stash pop`,
              solutionCode: `git stash\ngit stash list\ngit stash pop`,
              codeLanguage: 'bash',
              quiz: quiz('Stash Quiz', [
                mcq('Which command restores the latest stashed changes?', 'git stash pop', ['git stash clear', 'git reset'], '`git stash pop` applies and removes the top stash.'),
              ]),
            }),
          ]
        },
        {
          title: 'Module 3: Advanced Remote & GitHub Workflows',
          lessons: [
            lesson('Connecting to Remote Repos (`git remote`)', 'git-remotes', `# Remote Repositories\n\nLink your local repo to GitHub using \`git remote add origin <url>\`.`, {
              starterCode: `git remote add origin https://github.com/user/repo.git\ngit remote -v`,
              solutionCode: `git remote add origin https://github.com/user/repo.git\ngit remote -v`,
              codeLanguage: 'bash',
              quiz: quiz('Remote Quiz', [
                mcq('What does `git remote -v` do?', 'Displays the remote URLs for fetch and push', ['Deletes remote', 'Pushes commits'], '`-v` lists configured remote repository URLs.'),
              ]),
            }),
            lesson('Pushing & Pulling (`git push`, `git pull`)', 'git-push-pull', `# Pushing & Pulling\n\nUpload commits with \`git push\` and fetch + merge updates with \`git pull\`.`, {
              starterCode: `git push -u origin main\ngit pull origin main`,
              solutionCode: `git push -u origin main\ngit pull origin main`,
              codeLanguage: 'bash',
              quiz: quiz('Push Pull Quiz', [
                mcq('What two commands comprise `git pull`?', 'git fetch + git merge', ['git push + git add', 'git init + git clone'], '`git pull` fetches remote commits and merges them immediately.'),
              ]),
            }),
            lesson('Forking & Pull Requests (PRs)', 'git-pull-requests', `# Pull Requests\n\nCollaborate on open source with Forks, Feature Branches, and GitHub Pull Requests.`, {
              starterCode: `# Create PR branch\ngit checkout -b fix-bug\ngit push origin fix-bug`,
              solutionCode: `git checkout -b fix-bug\ngit push origin fix-bug`,
              codeLanguage: 'bash',
              quiz: quiz('PR Quiz', [
                trueFalse('Pull Requests allow team members to review code before merging into main.', true),
              ]),
            }),
            lesson('Git Log Formatting & Searching', 'git-log-advanced', `# Log Formatting\n\nCustom log formats: \`git log --graph --oneline --all\`.`, {
              starterCode: `git log --graph --oneline --all --decorate`,
              solutionCode: `git log --graph --oneline --all --decorate`,
              codeLanguage: 'bash',
              quiz: quiz('Log Quiz', [
                mcq('Which flag formats git log as a single line per commit?', '--oneline', ['--short', '--summary'], '`--oneline` compresses commits into hash + message.'),
              ]),
            }),
            lesson('Undoing Changes (`reset`, `revert`, `checkout`)', 'git-undoing-changes', `# Undoing Changes\n\nSafely undo changes with \`git revert\` (creates new commit) or \`git reset\` (rewinds history).`, {
              starterCode: `git revert HEAD\ngit reset --soft HEAD~1`,
              solutionCode: `git revert HEAD\ngit reset --soft HEAD~1`,
              codeLanguage: 'bash',
              quiz: quiz('Undo Quiz', [
                mcq('Which undo command is safest for public shared branches?', 'git revert', ['git reset --hard', 'git rebase'], '`git revert` creates a new inverse commit without altering published history.'),
              ]),
            }),
          ]
        }
      ]
    },

    // ━━━━━━━━━━━━━━━━━━━ DOCKER & CONTAINERIZATION ━━━━━━━━━━━━━━━━━━━
    {
      title: 'Docker & Containerization',
      slug: 'docker-containerization',
      description: 'Containerize applications from scratch — Dockerfiles, multi-stage builds, networking, volumes, and Docker Compose orchestrations.',
      difficulty: 'intermediate',
      language: 'en',
      estimatedHours: 15,
      resources: [
        { resourceType: 'youtube', title: 'Docker Tutorial for Beginners', url: 'https://www.youtube.com/watch?v=pTFZFxd4hOI', author: 'Programming with Mosh', platform: 'YouTube' },
        { resourceType: 'youtube', title: 'Docker Deep Dive Course', url: 'https://www.youtube.com/watch?v=3c-iBn73dDE', author: 'TechWorld with Nana', platform: 'YouTube' },
        { resourceType: 'youtube', title: 'Dockerfiles Best Practices & Multi-Stage Builds', url: 'https://www.youtube.com/watch?v=wGz_D4rS2z8', author: 'Fireship', platform: 'YouTube' },
        { resourceType: 'youtube', title: 'Docker Compose in 15 Minutes', url: 'https://www.youtube.com/watch?v=HG6yIjZapSA', author: 'Traversy Media', platform: 'YouTube' },
        { resourceType: 'youtube', title: 'Container Security & Vulnerability Scanning', url: 'https://www.youtube.com/watch?v=95bT6rLd84w', author: 'FreeCodeCamp', platform: 'YouTube' },
        { resourceType: 'ebook', title: 'Official Docker Documentation', url: 'https://docs.docker.com/', author: 'Docker Inc' },
        { resourceType: 'article', title: 'Dockerfiles Best Practices for Node & Python', url: 'https://docs.docker.com/develop/develop-images/dockerfile_best-practices/', author: 'Docker' },
        { resourceType: 'cheatsheet', title: 'Docker CLI Quick Reference Cheat Sheet', url: 'https://docs.docker.com/get-started/docker_cheatsheet.pdf', author: 'Docker' },
        { resourceType: 'article', title: 'Awesome Docker Repositories & Guides', url: 'https://github.com/veggiemonk/awesome-docker', author: 'veggiemonk' },
        { resourceType: 'cheatsheet', title: 'Play with Docker Interactive Sandbox', url: 'https://labs.play-with-docker.com/', author: 'Docker Labs' },
      ],
      modules: [
        {
          title: 'Module 1: Docker Basics',
          lessons: [
            setupLesson('Docker & Containerization', 'docker-containerization', 'bash',
              `1. Install Docker Desktop from [docker.com](https://www.docker.com/)\n2. Enable WSL2 (Windows) or virtualization\n3. Run: \`docker --version\`\n4. Test: \`docker run hello-world\``,
              `docker --version\ndocker run hello-world`,
              `docker --version\ndocker run hello-world`
            ),
            lesson('Containers vs Virtual Machines', 'docker-containers-vs-vms', `# Containers vs VMs\n\nContainers share the host OS kernel, making them lightweight and starting in milliseconds.`, {
              starterCode: `docker ps\ndocker info`,
              solutionCode: `docker ps\ndocker info`,
              codeLanguage: 'bash',
              quiz: quiz('Container Quiz', [
                mcq('Why are containers lighter than Virtual Machines?', 'Containers share the host OS kernel', ['Containers have full OS virtual disks', 'Containers don\'t use memory'], 'Sharing the OS kernel eliminates hypervisor overhead.'),
              ]),
            }),
            lesson('Running Containers (`docker run`)', 'docker-run-basics', `# Running Containers\n\nLaunch containers interactively or in detached mode with port forwarding.`, {
              starterCode: `docker run -d -p 8080:80 --name webserver nginx\ndocker ps`,
              solutionCode: `docker run -d -p 8080:80 --name webserver nginx\ndocker ps`,
              codeLanguage: 'bash',
              quiz: quiz('Docker Run Quiz', [
                mcq('What does the `-d` flag do in `docker run`?', 'Runs the container in detached (background) mode', ['Deletes container', 'Downloads image'], '`-d` detaches container execution from current terminal.'),
              ]),
            }),
            lesson('Managing Container Lifecycle', 'docker-lifecycle', `# Lifecycle Commands\n\nStop, start, restart, and remove containers (\`docker stop\`, \`docker rm\`).`, {
              starterCode: `docker stop webserver\ndocker rm webserver`,
              solutionCode: `docker stop webserver\ndocker rm webserver`,
              codeLanguage: 'bash',
              quiz: quiz('Lifecycle Quiz', [
                mcq('Which command removes a stopped container?', 'docker rm <name>', ['docker stop', 'docker rmi'], '`docker rm` removes containers; `docker rmi` removes images.'),
              ]),
            }),
            lesson('Inspecting Logs & Executing Commands', 'docker-logs-exec', `# Logs & Exec\n\nInspect stdout logs with \`docker logs\` and open a bash prompt inside a running container with \`docker exec -it\`.`, {
              starterCode: `docker logs webserver\ndocker exec -it webserver bash`,
              solutionCode: `docker logs webserver\ndocker exec -it webserver bash`,
              codeLanguage: 'bash',
              quiz: quiz('Exec Quiz', [
                mcq('How do you open an interactive terminal in a container?', 'docker exec -it <container> bash', ['docker logs -f', 'docker run -d'], '`-it` allocates pseudo-TTY for interactive shell.'),
              ]),
            }),
          ]
        },
        {
          title: 'Module 2: Building Custom Images',
          lessons: [
            lesson('Writing your first Dockerfile', 'dockerfile-basics', `# Writing a Dockerfile\n\nDefine base image, instructions (\`FROM\`, \`WORKDIR\`, \`COPY\`, \`RUN\`, \`CMD\`).`, {
              starterCode: `# Sample Dockerfile\nFROM node:18-alpine\nWORKDIR /app\nCOPY package*.json ./\nRUN npm install\nCOPY . .\nEXPOSE 3000\nCMD ["npm", "start"]`,
              solutionCode: `FROM node:18-alpine\nWORKDIR /app\nCOPY package*.json ./\nRUN npm install\nCOPY . .\nEXPOSE 3000\nCMD ["npm", "start"]`,
              codeLanguage: 'dockerfile',
              quiz: quiz('Dockerfile Quiz', [
                mcq('Which instruction specifies the starting container command?', 'CMD', ['FROM', 'RUN'], '`CMD` defines default execution command.'),
              ]),
            }),
            lesson('Building Images (`docker build`)', 'docker-build', `# Building Images\n\nBuild an image tag from Dockerfile using \`docker build -t app:v1 .\`.`, {
              starterCode: `docker build -t myapp:1.0 .\ndocker images`,
              solutionCode: `docker build -t myapp:1.0 .\ndocker images`,
              codeLanguage: 'bash',
              quiz: quiz('Build Quiz', [
                mcq('What does `-t` stand for in `docker build`?', 'Tag (name and version tag)', ['Target', 'Test'], '`-t` specifies name:tag.'),
              ]),
            }),
            lesson('Multi-Stage Builds', 'docker-multistage-builds', `# Multi-Stage Builds\n\nDrastically reduce image size by separating build tools from production runtime.`, {
              starterCode: `# Build stage\nFROM node:18-alpine AS builder\nWORKDIR /app\nCOPY . .\nRUN npm run build\n\n# Production stage\nFROM nginx:alpine\nCOPY --from=builder /app/dist /usr/share/nginx/html`,
              solutionCode: `FROM node:18-alpine AS builder\nWORKDIR /app\nCOPY . .\nRUN npm run build\n\nFROM nginx:alpine\nCOPY --from=builder /app/dist /usr/share/nginx/html`,
              codeLanguage: 'dockerfile',
              quiz: quiz('Multi-Stage Quiz', [
                trueFalse('Multi-stage builds allow copying compiled assets without shipping compiler tools.', true),
              ]),
            }),
            lesson('Docker Volumes & Data Persistence', 'docker-volumes', `# Volumes\n\nPersist database data across container restarts using named volumes.`, {
              starterCode: `docker volume create db-data\ndocker run -d -v db-data:/var/lib/mysql mysql:8`,
              solutionCode: `docker volume create db-data\ndocker run -d -v db-data:/var/lib/mysql mysql:8`,
              codeLanguage: 'bash',
              quiz: quiz('Volume Quiz', [
                mcq('Why use Docker volumes?', 'To persist container data beyond container lifecycle', ['To speed up downloads', 'To bypass OS security'], 'Volumes decouple persistent data from container layers.'),
              ]),
            }),
            lesson('Docker Networks', 'docker-networks', `# Networking\n\nConnect containers securely using user-defined bridge networks.`, {
              starterCode: `docker network create app-net\ndocker run -d --network app-net --name db redis\ndocker run -d --network app-net --name web myapp`,
              solutionCode: `docker network create app-net\ndocker run -d --network app-net --name db redis\ndocker run -d --network app-net --name web myapp`,
              codeLanguage: 'bash',
              quiz: quiz('Networks Quiz', [
                trueFalse('Containers on the same user network can communicate by container name.', true),
              ]),
            }),
          ]
        },
        {
          title: 'Module 3: Docker Compose & Orchestration',
          lessons: [
            lesson('Docker Compose Basics (`docker-compose.yml`)', 'docker-compose-basics', `# Docker Compose\n\nOrchestrate multi-container applications with a declarative YAML file.`, {
              starterCode: `version: '3.8'\nservices:\n  web:\n    build: .\n    ports:\n      - "3000:3000"\n  db:\n    image: postgres:15\n    environment:\n      POSTGRES_PASSWORD: secret`,
              solutionCode: `version: '3.8'\nservices:\n  web:\n    build: .\n    ports:\n      - "3000:3000"\n  db:\n    image: postgres:15\n    environment:\n      POSTGRES_PASSWORD: secret`,
              codeLanguage: 'yaml',
              quiz: quiz('Compose Quiz', [
                mcq('Which command starts all services in `docker-compose.yml`?', 'docker compose up -d', ['docker run all', 'docker compose start'], '`docker compose up -d` builds and launches all defined services.'),
              ]),
            }),
            lesson('Environment Variables in Compose', 'docker-compose-env', `# Environment Variables\n\nInject configuration securely using \`.env\` files in Docker Compose.`, {
              starterCode: `# .env file\nPORT=8080\nDB_PASS=supersecret`,
              solutionCode: `# .env file\nPORT=8080\nDB_PASS=supersecret`,
              codeLanguage: 'bash',
              quiz: quiz('Env Quiz', [
                trueFalse('Docker Compose automatically loads key-value pairs from a `.env` file.', true),
              ]),
            }),
            lesson('Healthchecks & Dependencies', 'docker-compose-healthcheck', `# Healthchecks\n\nEnsure database readiness before app boot using \`depends_on\` and \`healthcheck\`.`, {
              starterCode: `services:\n  web:\n    build: .\n    depends_on:\n      db:\n        condition: service_healthy`,
              solutionCode: `services:\n  web:\n    build: .\n    depends_on:\n      db:\n        condition: service_healthy`,
              codeLanguage: 'yaml',
              quiz: quiz('Healthcheck Quiz', [
                mcq('Why configure container healthchecks?', 'To delay dependent app startup until database is ready', ['To delete corrupt containers', 'To speed up network'], 'Healthchecks verify internal service readiness.'),
              ]),
            }),
            lesson('Docker Hub Registry & Pushing Images', 'docker-hub-push', `# Docker Hub\n\nTag and push custom images to Docker Hub registry for distribution.`, {
              starterCode: `docker login\ndocker tag myapp:1.0 username/myapp:1.0\ndocker push username/myapp:1.0`,
              solutionCode: `docker login\ndocker tag myapp:1.0 username/myapp:1.0\ndocker push username/myapp:1.0`,
              codeLanguage: 'bash',
              quiz: quiz('Registry Quiz', [
                mcq('What command uploads an image to Docker Hub?', 'docker push <username/image:tag>', ['docker upload', 'docker sync'], '`docker push` uploads tagged images to registries.'),
              ]),
            }),
            lesson('Container Optimization & Security Scanning', 'docker-security-optimization', `# Optimization & Security\n\nScan image vulnerabilities with \`docker scan\` or \`trivy\` and run as non-root user.`, {
              starterCode: `USER node\ndocker scan myapp:1.0`,
              solutionCode: `USER node\ndocker scan myapp:1.0`,
              codeLanguage: 'dockerfile',
              quiz: quiz('Security Quiz', [
                trueFalse('Running containers as non-root user enhances container isolation security.', true),
              ]),
            }),
          ]
        }
      ]
    },

    // ━━━━━━━━━━━━━━━━━━━ CI/CD PIPELINES ━━━━━━━━━━━━━━━━━━━
    {
      title: 'CI/CD Pipelines',
      slug: 'cicd-pipelines',
      description: 'Automate testing, building, and deploying with GitHub Actions, GitLab CI, and Jenkins. Learn continuous integration and deployment best practices.',
      difficulty: 'intermediate',
      language: 'en',
      estimatedHours: 15,
      resources: [
        { resourceType: 'youtube', title: 'GitHub Actions Full Course for Beginners', url: 'https://www.youtube.com/watch?v=R8_veQiYBjU', author: 'TechWorld with Nana', platform: 'YouTube' },
        { resourceType: 'youtube', title: 'CI/CD Pipeline Explained in 10 Minutes', url: 'https://www.youtube.com/watch?v=scEDHsr3APg', author: 'Fireship', platform: 'YouTube' },
        { resourceType: 'youtube', title: 'Complete DevOps CI/CD Project with Docker & AWS', url: 'https://www.youtube.com/watch?v=17B-YxJgB18', author: 'FreeCodeCamp', platform: 'YouTube' },
        { resourceType: 'youtube', title: 'GitLab CI/CD Tutorial for Beginners', url: 'https://www.youtube.com/watch?v=qP8Kir28gaI', author: 'DevOps Directive', platform: 'YouTube' },
        { resourceType: 'youtube', title: 'Jenkins Pipeline Tutorial for Beginners', url: 'https://www.youtube.com/watch?v=7KCS7054n2Y', author: 'Edureka', platform: 'YouTube' },
        { resourceType: 'ebook', title: 'GitHub Actions Official Workflow Documentation', url: 'https://docs.github.com/en/actions', author: 'GitHub' },
        { resourceType: 'article', title: 'Continuous Integration & Delivery Guide by Martin Fowler', url: 'https://martinfowler.com/articles/continuousIntegration.html', author: 'Martin Fowler' },
        { resourceType: 'cheatsheet', title: 'GitHub Actions Syntax Cheat Sheet', url: 'https://github.com/sdras/awesome-actions', author: 'Sarah Drasner' },
        { resourceType: 'article', title: 'Best Practices for CI/CD Pipeline Security', url: 'https://owasp.org/www-project-top-10-ci-cd-security-risks/', author: 'OWASP' },
        { resourceType: 'cheatsheet', title: 'GitLab CI/CD YAML Reference', url: 'https://docs.gitlab.com/ee/ci/yaml/', author: 'GitLab' },
      ],
      modules: [
        {
          title: 'Module 1: CI/CD Fundamentals & GitHub Actions',
          lessons: [
            setupLesson('CI/CD Pipelines', 'cicd-pipelines', 'yaml',
              `1. Create a repository on GitHub\n2. Create directory: \`.github/workflows/\`\n3. Create \`main.yml\` workflow file\n4. Commit & push to trigger automated run`,
              `name: CI Test Pipeline\non: [push]\njobs:\n  build:\n    runs-on: ubuntu-latest\n    steps:\n    - uses: actions/checkout@v3\n    - run: echo "Pipeline executed successfully!"`,
              `name: CI Test Pipeline\non: [push]\njobs:\n  build:\n    runs-on: ubuntu-latest\n    steps:\n    - uses: actions/checkout@v3\n    - run: echo "Pipeline executed successfully!"`
            ),
            lesson('Core Principles of CI/CD', 'cicd-principles', `# Principles of CI/CD\n\nContinuous Integration automatically builds and tests code commits. Continuous Deployment delivers releases to production seamlessly.`, {
              starterCode: `# Conceptual CI/CD Pipeline Flow\nCode -> Automated Test -> Build Image -> Deploy Staging -> Production`,
              solutionCode: `Code -> Automated Test -> Build Image -> Deploy Staging -> Production`,
              codeLanguage: 'text',
              quiz: quiz('CI/CD Principles Quiz', [
                mcq('What is the main goal of Continuous Integration (CI)?', 'Automatically build and test code on every commit', ['Delete bug reports', 'Manual server restarts'], 'CI ensures rapid detection of integration errors.'),
                trueFalse('Continuous Deployment sends tested code changes directly to production without manual intervention.', true),
              ]),
            }),
            lesson('GitHub Actions Workflow Syntax', 'github-actions-syntax', `# GitHub Actions Syntax\n\nUnderstand triggers (\`on:\`), jobs (\`jobs:\`), runners (\`runs-on:\`), and steps (\`steps:\`).`, {
              starterCode: `name: Node.js CI\non:\n  push:\n    branches: [ main ]\n  pull_request:\n    branches: [ main ]\njobs:\n  build:\n    runs-on: ubuntu-latest\n    steps:\n      - uses: actions/checkout@v3\n      - name: Use Node.js\n        uses: actions/setup-node@v3\n        with:\n          node-version: '18'\n      - run: npm ci\n      - run: npm test`,
              solutionCode: `name: Node.js CI\non:\n  push:\n    branches: [ main ]\n  pull_request:\n    branches: [ main ]\njobs:\n  build:\n    runs-on: ubuntu-latest\n    steps:\n      - uses: actions/checkout@v3\n      - name: Use Node.js\n        uses: actions/setup-node@v3\n        with:\n          node-version: '18'\n      - run: npm ci\n      - run: npm test`,
              codeLanguage: 'yaml',
              quiz: quiz('Actions Syntax Quiz', [
                mcq('What does `uses: actions/checkout@v3` do?', 'Downloads your repository code onto the runner machine', ['Installs Node.js', 'Sends an email notification'], '`actions/checkout` checks out your repo so workflow steps can access your code.'),
              ]),
            }),
            lesson('Automated Testing in CI Pipelines', 'automated-testing-ci', `# Automated Testing\n\nRun unit, integration, and linting test suites automatically on pull requests.`, {
              starterCode: `- name: Run Linter\n  run: npm run lint\n- name: Run Unit Tests\n  run: npm test -- --coverage`,
              solutionCode: `- name: Run Linter\n  run: npm run lint\n- name: Run Unit Tests\n  run: npm test -- --coverage`,
              codeLanguage: 'yaml',
              quiz: quiz('Testing CI Quiz', [
                trueFalse('If automated tests fail in CI, the pull request should be blocked from merging.', true),
              ]),
            }),
            lesson('Managing Secrets & Environment Variables', 'cicd-secrets', `# Encrypted Secrets\n\nStore API tokens, SSH keys, and passwords in GitHub Repository Secrets (\`\${{ secrets.API_TOKEN }}\`).`, {
              starterCode: `- name: Deploy to Server\n  env:\n    SSH_KEY: \${{ secrets.SERVER_SSH_KEY }}\n  run: ./deploy.sh`,
              solutionCode: `- name: Deploy to Server\n  env:\n    SSH_KEY: \${{ secrets.SERVER_SSH_KEY }}\n  run: ./deploy.sh`,
              codeLanguage: 'yaml',
              quiz: quiz('Secrets Quiz', [
                mcq('Where should database credentials be stored for CI/CD?', 'GitHub Repository Encrypted Secrets', ['Hardcoded in workflow YAML', 'In public repository README'], 'Secrets must be securely stored in repository settings.'),
              ]),
            }),
          ]
        },
        {
          title: 'Module 2: Automated Docker & Cloud Deployment',
          lessons: [
            lesson('Building & Pushing Docker Images in CI', 'ci-docker-build', `# Docker in CI\n\nAutomate building Docker images and pushing them to Docker Hub or Amazon ECR.`, {
              starterCode: `- name: Build & Push Docker Image\n  uses: docker/build-push-action@v4\n  with:\n    push: true\n    tags: user/app:latest`,
              solutionCode: `- name: Build & Push Docker Image\n  uses: docker/build-push-action@v4\n  with:\n    push: true\n    tags: user/app:latest`,
              codeLanguage: 'yaml',
              quiz: quiz('Docker CI Quiz', [
                mcq('Why build Docker images in CI?', 'To produce consistent, verified container artifacts ready for deployment', ['To test local disk space', 'To compile HTML'], 'Container images ensure identical runtime artifacts across staging & production.'),
              ]),
            }),
            lesson('Deploying to AWS/Vercel via CI/CD', 'ci-cloud-deployment', `# Cloud Deployment\n\nTrigger automated deployments to cloud platforms upon successful main branch merge.`, {
              starterCode: `- name: Deploy to Vercel\n  uses: amondnet/vercel-action@v20\n  with:\n    vercel-token: \${{ secrets.VERCEL_TOKEN }}`,
              solutionCode: `- name: Deploy to Vercel\n  uses: amondnet/vercel-action@v20\n  with:\n    vercel-token: \${{ secrets.VERCEL_TOKEN }}`,
              codeLanguage: 'yaml',
              quiz: quiz('Cloud Deployment Quiz', [
                trueFalse('Continuous Deployment automatically deploys validated code without manual steps.', true),
              ]),
            }),
            lesson('Matrix Builds for Cross-Platform Testing', 'ci-matrix-builds', `# Matrix Strategy\n\nTest across multiple OS platforms and language versions simultaneously.`, {
              starterCode: `strategy:\n  matrix:\n    node-version: [16.x, 18.x, 20.x]\n    os: [ubuntu-latest, windows-latest]`,
              solutionCode: `strategy:\n  matrix:\n    node-version: [16.x, 18.x, 20.x]\n    os: [ubuntu-latest, windows-latest]`,
              codeLanguage: 'yaml',
              quiz: quiz('Matrix Quiz', [
                mcq('What is the benefit of a matrix strategy?', 'Runs parallel test jobs across multiple version combinations', ['Compiles faster on one CPU', 'Deletes old commits'], 'Matrix strategies maximize testing coverage across operating systems.'),
              ]),
            }),
            lesson('Caching Dependencies for Fast Pipelines', 'ci-caching', `# Caching Dependencies\n\nUse caching (\`actions/cache\`) to speed up build times by storing \`node_modules/\` or \`~/.m2\`.`, {
              starterCode: `- uses: actions/cache@v3\n  with:\n    path: ~/.npm\n    key: \${{ runner.os }}-node-\${{ hashFiles('**/package-lock.json') }}`,
              solutionCode: `- uses: actions/cache@v3\n  with:\n    path: ~/.npm\n    key: \${{ runner.os }}-node-\${{ hashFiles('**/package-lock.json') }}`,
              codeLanguage: 'yaml',
              quiz: quiz('Cache Quiz', [
                trueFalse('Dependency caching can reduce CI pipeline runtimes by over 50%.', true),
              ]),
            }),
            lesson('GitLab CI & Jenkins Pipelines Overview', 'gitlab-jenkins-overview', `# GitLab & Jenkins\n\nCompare \`.gitlab-ci.yml\` and Jenkinsfiles (\`Jenkinsfile\`) with GitHub Actions.`, {
              starterCode: `# GitLab CI example (.gitlab-ci.yml)\nstages:\n  - test\n  - build\n\njob_test:\n  stage: test\n  script:\n    - npm test`,
              solutionCode: `stages:\n  - test\n  - build\n\njob_test:\n  stage: test\n  script:\n    - npm test`,
              codeLanguage: 'yaml',
              quiz: quiz('GitLab Jenkins Quiz', [
                mcq('What file defines a GitLab CI pipeline?', '.gitlab-ci.yml', ['Jenkinsfile', 'docker-compose.yml'], 'GitLab CI uses `.gitlab-ci.yml` in repository root.'),
              ]),
            }),
          ]
        },
        {
          title: 'Module 3: Advanced Pipeline Security & Monitoring',
          lessons: [
            lesson('Security Scanning in Pipelines (SAST & DAST)', 'cicd-security-sast-dast', `# Pipeline Security\n\nIntegrate Static Application Security Testing (SAST) and Dependency Vulnerability Scans.`, {
              starterCode: `- name: Security Scan (Trivy)\n  uses: aquasecurity/trivy-action@master\n  with:\n    image-ref: 'myapp:latest'`,
              solutionCode: `- name: Security Scan (Trivy)\n  uses: aquasecurity/trivy-action@master\n  with:\n    image-ref: 'myapp:latest'`,
              codeLanguage: 'yaml',
              quiz: quiz('Security Scan Quiz', [
                mcq('What does SAST stand for?', 'Static Application Security Testing', ['Secure Automated Storage Tool', 'System Audit Script Testing'], 'SAST inspects source code for vulnerability flaws before deployment.'),
              ]),
            }),
            lesson('Canary & Blue-Green Deployments', 'blue-green-deployments', `# Blue-Green Deployments\n\nZero-downtime deployment strategy switching traffic between identical Blue and Green server clusters.`, {
              starterCode: `# Blue-Green Router Switch\nnginx -s reload # switch upstream to green container`,
              solutionCode: `nginx -s reload`,
              codeLanguage: 'bash',
              quiz: quiz('Blue Green Quiz', [
                trueFalse('Blue-Green deployment eliminates downtime by maintaining two identical environments.', true),
              ]),
            }),
            lesson('Rollback Strategies on Failure', 'cicd-rollbacks', `# Rollbacks\n\nAutomate instant rollbacks to previous stable release tags if healthchecks fail post-deployment.`, {
              starterCode: `if ! curl -f http://localhost/health; then\n  docker-compose rollback\nfi`,
              solutionCode: `if ! curl -f http://localhost/health; then\n  docker-compose rollback\nfi`,
              codeLanguage: 'bash',
              quiz: quiz('Rollback Quiz', [
                mcq('Why implement automated rollbacks?', 'To immediately restore service availability if a new release crashes', ['To save disk space', 'To change git history'], 'Automated rollbacks minimize customer-facing downtime.'),
              ]),
            }),
            lesson('Pipeline Status Badges & Notifications', 'cicd-notifications', `# Notifications & Badges\n\nAdd build status badges to README and send Slack/Discord alerts on pipeline failures.`, {
              starterCode: `- name: Slack Notification\n  uses: 8398a7/action-slack@v3\n  if: failure()\n  with:\n    status: \${{ job.status }}`,
              solutionCode: `- name: Slack Notification\n  uses: 8398a7/action-slack@v3\n  if: failure()\n  with:\n    status: \${{ job.status }}`,
              codeLanguage: 'yaml',
              quiz: quiz('Notification Quiz', [
                trueFalse('`if: failure()` ensures steps run only when a previous job failed.', true),
              ]),
            }),
            lesson('CI/CD Capstone: Full End-to-End Pipeline', 'cicd-capstone', `# Capstone Pipeline\n\nBuild a complete production pipeline: Checkout → Lint → Test → Security Scan → Docker Build → Push → Cloud Deploy.`, {
              starterCode: `name: Production CI/CD Capstone\non:\n  push:\n    branches: [ main ]\njobs:\n  pipeline:\n    runs-on: ubuntu-latest\n    steps:\n      - uses: actions/checkout@v3\n      - run: echo "Executing full production pipeline..."`,
              solutionCode: `name: Production CI/CD Capstone\non:\n  push:\n    branches: [ main ]\njobs:\n  pipeline:\n    runs-on: ubuntu-latest\n    steps:\n      - uses: actions/checkout@v3\n      - run: echo "Executing full production pipeline..."`,
              codeLanguage: 'yaml',
              quiz: quiz('Capstone Quiz', [
                mcq('What is the final stage of a complete CI/CD pipeline?', 'Deployment & Post-Deploy Health Check', ['Git init', 'Source code checkout'], 'Deployment with health verification completes the delivery pipeline.'),
              ]),
            }),
          ]
        }
      ]
    },

    // ━━━━━━━━━━━━━━━━━━━ LINUX COMMAND LINE ━━━━━━━━━━━━━━━━━━━
    {
      title: 'Linux Command Line',
      slug: 'linux-command-line',
      description: 'Master essential Linux commands, shell scripting, file permissions, process management, and networking utilities for server administration.',
      difficulty: 'beginner',
      language: 'en',
      estimatedHours: 12,
      resources: [
        { resourceType: 'youtube', title: 'Linux Command Line Tutorial for Beginners', url: 'https://www.youtube.com/watch?v=wBp0Rb-ZJak', author: 'FreeCodeCamp', platform: 'YouTube' },
        { resourceType: 'youtube', title: 'Bash Scripting Full Course in 1 Hour', url: 'https://www.youtube.com/watch?v=v-F3YLMy6TY', author: 'TechWorld with Nana', platform: 'YouTube' },
        { resourceType: 'youtube', title: 'Linux System Administration Crash Course', url: 'https://www.youtube.com/watch?v=hB9i8fE2nGE', author: 'NetworkChuck', platform: 'YouTube' },
        { resourceType: 'youtube', title: 'Linux Permissions & chmod Explained', url: 'https://www.youtube.com/watch?v=4StandardNqL-J8', author: 'Fireship', platform: 'YouTube' },
        { resourceType: 'youtube', title: 'Linux Networking Commands (netstat, ss, dig)', url: 'https://www.youtube.com/watch?v=0hY1j6lH5_M', author: 'Corey Schafer', platform: 'YouTube' },
        { resourceType: 'ebook', title: 'The Linux Command Line (Free PDF)', url: 'https://linuxcommand.org/tlcl.php', author: 'William Shotts' },
        { resourceType: 'article', title: 'Linux Journey Interactive Guide', url: 'https://linuxjourney.com/', author: 'Linux Journey' },
        { resourceType: 'cheatsheet', title: 'Linux Command Line Cheat Sheet', url: 'https://www.cheatography.com/davechild/cheat-sheets/linux-command-line/', author: 'Cheatography' },
        { resourceType: 'article', title: 'Bash Scripting Guide for Developers', url: 'https://devhints.io/bash', author: 'Rico Sta. Cruz' },
        { resourceType: 'cheatsheet', title: 'Linux System Monitoring Commands Reference', url: 'https://ss64.com/bash/', author: 'SS64' },
      ],
      modules: [
        {
          title: 'Module 1: Navigation & File Manipulation',
          lessons: [
            setupLesson('Linux Command Line', 'linux-command-line', 'bash',
              `1. Open Terminal (macOS/Linux) or WSL2 (Windows)\n2. Run: \`uname -a\` to verify kernel\n3. Run: \`pwd\` to print current directory`,
              `uname -a\npwd\nwhoami`,
              `uname -a\npwd\nwhoami`
            ),
            lesson('Navigating the Filesystem (`pwd`, `cd`, `ls`)', 'linux-navigation', `# Navigation\n\nNavigate directories with \`cd\`, list contents with \`ls -la\`, and print working directory with \`pwd\`.`, {
              starterCode: `pwd\nls -la /usr\ncd ~ && pwd`,
              solutionCode: `pwd\nls -la /usr\ncd ~ && pwd`,
              codeLanguage: 'bash',
              quiz: quiz('Navigation Quiz', [
                mcq('What does `ls -la` do?', 'Lists all files including hidden files in long format', ['Deletes files', 'Creates directory'], '`-a` includes hidden dotfiles; `-l` shows detailed permissions & sizes.'),
              ]),
            }),
            lesson('Creating, Copying & Moving Files (`mkdir`, `cp`, `mv`, `rm`)', 'linux-file-ops', `# File Operations\n\nCreate directories (\`mkdir -p\`), copy files (\`cp -r\`), rename/move (\`mv\`), and delete (\`rm -rf\`).`, {
              starterCode: `mkdir -p project/src\ntouch project/src/app.js\ncp project/src/app.js project/src/app.bak.js\nls -l project/src`,
              solutionCode: `mkdir -p project/src\ntouch project/src/app.js\ncp project/src/app.js project/src/app.bak.js\nls -l project/src`,
              codeLanguage: 'bash',
              quiz: quiz('File Ops Quiz', [
                mcq('Which flag is required to copy a directory recursively?', '-r (or -R)', ['-d', '-f'], '`-r` recursively copies directories and their contents.'),
              ]),
            }),
            lesson('Viewing File Content (`cat`, `less`, `head`, `tail`)', 'linux-viewing-files', `# Viewing Content\n\nRead files with \`cat\`, navigate with \`less\`, view top lines with \`head -n 10\`, and stream logs with \`tail -f\`.`, {
              starterCode: `head -n 5 /etc/passwd\ntail -n 5 /etc/passwd`,
              solutionCode: `head -n 5 /etc/passwd\ntail -n 5 /etc/passwd`,
              codeLanguage: 'bash',
              quiz: quiz('View Content Quiz', [
                mcq('Which command streams log file updates in real-time?', 'tail -f <file>', ['cat <file>', 'head <file>'], '`tail -f` outputs appended lines as the file grows.'),
              ]),
            }),
            lesson('Searching & Filtering Text (`grep`, `find`)', 'linux-grep-find', `# Searching\n\nFind files by name with \`find . -name "*.js"\` and filter file lines matching patterns with \`grep -rn "pattern" .\`.`, {
              starterCode: `find /etc -name "*.conf" 2>/dev/null | head -n 5\ngrep -i "root" /etc/passwd`,
              solutionCode: `find /etc -name "*.conf" 2>/dev/null | head -n 5\ngrep -i "root" /etc/passwd`,
              codeLanguage: 'bash',
              quiz: quiz('Grep Quiz', [
                mcq('What does `grep -i` do?', 'Performs case-insensitive pattern matching', ['Inverts matching', 'Counts lines'], '`-i` ignores case during matching.'),
              ]),
            }),
          ]
        },
        {
          title: 'Module 2: Permissions, Processes & Streams',
          lessons: [
            lesson('File Permissions & Ownership (`chmod`, `chown`)', 'linux-permissions', `# Permissions\n\nUnderstand read (4), write (2), execute (1) permissions and modify with \`chmod 755 file\`.`, {
              starterCode: `touch test.sh\nchmod +x test.sh\nls -l test.sh`,
              solutionCode: `touch test.sh\nchmod +x test.sh\nls -l test.sh`,
              codeLanguage: 'bash',
              quiz: quiz('Permissions Quiz', [
                mcq('What numeric value represents read (4) + write (2) + execute (1)?', '7', ['6', '5'], '4 + 2 + 1 = 7 (rwx).'),
              ]),
            }),
            lesson('Process Management (`ps`, `top`, `htop`, `kill`)', 'linux-processes', `# Processes\n\nView active processes with \`ps aux\` or \`top\`, and terminate processes using \`kill -9 <PID>\`.`, {
              starterCode: `ps aux | grep node\nkill -15 1234 2>/dev/null || true`,
              solutionCode: `ps aux | grep node`,
              codeLanguage: 'bash',
              quiz: quiz('Process Quiz', [
                mcq('What signal does `kill -9` send?', 'SIGKILL (force immediate termination)', ['SIGTERM (graceful shutdown)', 'SIGHUP'], '`-9` sends SIGKILL which cannot be caught or ignored.'),
              ]),
            }),
            lesson('I/O Redirection & Pipes (`>`, `>>`, `|`)', 'linux-redirection-pipes', `# Redirection & Pipes\n\nRedirect output to file (\`>\` overwrite, \`>>\` append) and pipe output to next command (\`|\`).`, {
              starterCode: `echo "Hello World" > output.txt\necho "Line 2" >> output.txt\ncat output.txt | grep "Hello"`,
              solutionCode: `echo "Hello World" > output.txt\necho "Line 2" >> output.txt\ncat output.txt | grep "Hello"`,
              codeLanguage: 'bash',
              quiz: quiz('Pipes Quiz', [
                mcq('What is the difference between `>` and `>>`?', '`>` overwrites the file; `>>` appends to the file', ['`>` appends; `>>` overwrites', 'Both do the same'], '`>` replaces content; `>>` appends to existing content.'),
              ]),
            }),
            lesson('Environment Variables (`export`, `env`)', 'linux-env-vars', `# Environment Variables\n\nExport system variables with \`export PATH=$PATH:/custom/bin\` and list with \`env\`.`, {
              starterCode: `export APP_ENV="production"\necho $APP_ENV\nenv | grep APP_ENV`,
              solutionCode: `export APP_ENV="production"\necho $APP_ENV\nenv | grep APP_ENV`,
              codeLanguage: 'bash',
              quiz: quiz('Env Vars Quiz', [
                trueFalse('Variables exported with `export` are available to child processes.', true),
              ]),
            }),
            lesson('Archiving & Compression (`tar`, `gzip`, `zip`)', 'linux-archives', `# Archiving\n\nCompress directories into tarballs: \`tar -czvf archive.tar.gz /folder\` and extract: \`tar -xzvf archive.tar.gz\`.`, {
              starterCode: `mkdir data && touch data/file.txt\ntar -czvf data.tar.gz data\ntar -tzvf data.tar.gz`,
              solutionCode: `mkdir data && touch data/file.txt\ntar -czvf data.tar.gz data\ntar -tzvf data.tar.gz`,
              codeLanguage: 'bash',
              quiz: quiz('Tar Quiz', [
                mcq('What flag extracts a gzip-compressed tar archive?', '-xzvf', ['-czvf', '-tzvf'], '`-x` = extract, `-z` = gzip, `-v` = verbose, `-f` = file.'),
              ]),
            }),
          ]
        },
        {
          title: 'Module 3: Shell Scripting & Networking',
          lessons: [
            lesson('Writing Bash Scripts (`#!/bin/bash`)', 'bash-scripting-basics', `# Bash Scripts\n\nCreate executable scripts starting with shebang \`#!/bin/bash\`.`, {
              starterCode: `#!/bin/bash\nNAME="Developer"\necho "Hello, $NAME!"\necho "Current date: $(date)"`,
              solutionCode: `#!/bin/bash\nNAME="Developer"\necho "Hello, $NAME!"\necho "Current date: $(date)"`,
              codeLanguage: 'bash',
              quiz: quiz('Scripting Quiz', [
                mcq('What is `#!/bin/bash` called?', 'Shebang line', ['Comment tag', 'Header macro'], 'Shebang tells the OS loader which interpreter to execute.'),
              ]),
            }),
            lesson('Conditionals & Loops in Bash', 'bash-control-flow', `# Control Flow in Bash\n\nUse \`if [ -f file.txt ]; then ... fi\` and \`for i in {1..5}; do ... done\`.`, {
              starterCode: `#!/bin/bash\nfor i in {1..3}; do\n  echo "Item $i"\ndone`,
              solutionCode: `#!/bin/bash\nfor i in {1..3}; do\n  echo "Item $i"\ndone`,
              codeLanguage: 'bash',
              quiz: quiz('Bash Flow Quiz', [
                mcq('How do you close an `if` block in Bash?', 'fi', ['endif', 'done'], '`if` blocks end with `fi` (if spelled backwards).'),
              ]),
            }),
            lesson('Networking Utilities (`curl`, `ping`, `netstat`, `dig`)', 'linux-networking', `# Networking Utilities\n\nTest connectivity with \`ping\`, make HTTP calls with \`curl\`, check ports with \`ss -tuln\`, and query DNS with \`dig\`.`, {
              starterCode: `curl -I https://httpbin.org/get\ndig google.com +short`,
              solutionCode: `curl -I https://httpbin.org/get\ndig google.com +short`,
              codeLanguage: 'bash',
              quiz: quiz('Networking Quiz', [
                mcq('Which command fetches HTTP headers from a URL?', 'curl -I <url>', ['ping <url>', 'netstat <url>'], '`curl -I` issues a HEAD request to display headers.'),
              ]),
            }),
            lesson('CRON Jobs & Automation (`crontab`)', 'linux-cron-jobs', `# Cron Jobs\n\nSchedule recurring background tasks with \`crontab -e\` (e.g. \`0 2 * * * /backup.sh\`).`, {
              starterCode: `# Run backup at 2 AM every day\n0 2 * * * /home/user/backup.sh`,
              solutionCode: `0 2 * * * /home/user/backup.sh`,
              codeLanguage: 'bash',
              quiz: quiz('Cron Quiz', [
                mcq('What does `0 * * * *` mean in cron syntax?', 'Every hour at minute 0', ['Every minute', 'Every day at midnight'], 'The first field represents minutes (0), remaining fields are wildcards (*).'),
              ]),
            }),
            lesson('Linux Capstone: Automated Server Maintenance Script', 'linux-capstone', `# Capstone Script\n\nBuild a complete server maintenance script: Disk check, cleanup, backup archive, and status logging.`, {
              starterCode: `#!/bin/bash\necho "=== SERVER MAINTENANCE ==="\ndf -h /\necho "Disk check complete."`,
              solutionCode: `#!/bin/bash\necho "=== SERVER MAINTENANCE ==="\ndf -h /\necho "Disk check complete."`,
              codeLanguage: 'bash',
              quiz: quiz('Linux Capstone Quiz', [
                mcq('Which command checks filesystem disk space usage?', 'df -h', ['du -sh', 'free -m'], '`df -h` displays disk space usage in human-readable format.'),
              ]),
            }),
          ]
        }
      ]
    }
  ]
};
