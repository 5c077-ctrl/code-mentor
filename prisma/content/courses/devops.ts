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
    {
      title: 'Git & GitHub Mastery',
      slug: 'git-github-mastery',
      description: 'Learn version control from first commit to advanced workflows — branching, merging, rebasing, pull requests, and team collaboration.',
      difficulty: 'beginner',
      language: 'en',
      estimatedHours: 12,
      resources: [
        { resourceType: 'youtube', title: 'Git & GitHub Crash Course', url: 'https://www.youtube.com/watch?v=RGOj5yH7evk', author: 'Traversy Media', platform: 'YouTube' },
        { resourceType: 'ebook', title: 'Pro Git Book (Free)', url: 'https://git-scm.com/book/en/v2', author: 'Scott Chacon' },
        { resourceType: 'cheatsheet', title: 'Git Cheat Sheet', url: 'https://education.github.com/git-cheat-sheet-education.pdf', author: 'GitHub' },
      ],
      modules: [
        {
          title: 'Git Fundamentals',
          lessons: [
            setupLesson('Git & GitHub Mastery', 'git-github-mastery', 'bash',
              `1. Download Git from [git-scm.com](https://git-scm.com/)
2. Verify: \`git --version\`
3. Configure: \`git config --global user.name "Your Name"\`
4. Configure: \`git config --global user.email "you@example.com"\``,
              `# Verify Git is installed\ngit --version\n\n# Check configuration\ngit config --list`,
              `git --version\ngit config --list`
            ),
            lesson('Init, Add & Commit', 'git-init-add-commit', `# Init, Add & Commit

## Creating a Repository

\`\`\`bash
mkdir my-project && cd my-project
git init
\`\`\`

## The Three Areas
1. **Working Directory**: Your files on disk
2. **Staging Area**: Files ready to commit (\`git add\`)
3. **Repository**: Committed snapshots (\`git commit\`)

## Basic Workflow

\`\`\`bash
# Check status
git status

# Stage files
git add index.html           # Stage one file
git add .                    # Stage everything

# Commit
git commit -m "feat: add homepage"

# View history
git log --oneline
\`\`\`

## Writing Good Commit Messages
- Use **present tense**: "Add feature" not "Added feature"
- Keep first line under 50 characters
- Use prefixes: \`feat:\`, \`fix:\`, \`docs:\`, \`refactor:\`, \`test:\`

## .gitignore

\`\`\`
# .gitignore
node_modules/
.env
*.log
dist/
\`\`\``, {
              starterCode: `# Git workflow commands\n\n# Initialize a new repo\ngit init\n\n# Stage all files\ngit add .\n\n# Make a commit\ngit commit -m "feat: initial project setup"\n\n# View the log\ngit log --oneline`,
              solutionCode: `git init\ngit add .\ngit commit -m "feat: initial project setup"\ngit log --oneline`,
              codeLanguage: 'bash',
              estimatedMinutes: 20,
              xpReward: 50,
              quiz: quiz('Git Basics Quiz', [
                mcq('What does `git add .` do?', 'Stages all changes in the current directory', ['Commits all changes', 'Creates a new branch'], '`git add .` stages all modified and new files.'),
                mcq('What is the staging area?', 'A holding area for changes before committing', ['The remote repository', 'The working directory'], 'The staging area lets you select which changes to include in the next commit.'),
                trueFalse('`git commit` saves changes to the remote repository.', false, '`git commit` saves to the LOCAL repository. Use `git push` for remote.'),
              ]),
            }),
            lesson('Branching & Merging', 'git-branching-merging', `# Branching & Merging

## Creating Branches

\`\`\`bash
git branch feature-login       # Create branch
git checkout feature-login     # Switch to it
# Or combined:
git checkout -b feature-login  # Create + switch
\`\`\`

## Listing Branches

\`\`\`bash
git branch         # Local branches
git branch -a      # All (including remote)
\`\`\`

## Merging

\`\`\`bash
git checkout main
git merge feature-login
\`\`\`

## Resolving Merge Conflicts
When Git can't auto-merge, it marks conflicts:

\`\`\`
<<<<<<< HEAD
Current change
=======
Incoming change
>>>>>>> feature-login
\`\`\`

1. Edit the file to resolve
2. \`git add resolved-file.txt\`
3. \`git commit\`

## Deleting Branches

\`\`\`bash
git branch -d feature-login    # Delete merged branch
git branch -D feature-login    # Force delete
\`\`\`

## Git Flow
- \`main\` — production-ready code
- \`develop\` — integration branch
- \`feature/*\` — new features
- \`hotfix/*\` — urgent production fixes`, {
              starterCode: `# Branching workflow\n\n# Create and switch to a feature branch\ngit checkout -b feature/add-navbar\n\n# Make changes and commit\ngit add .\ngit commit -m "feat: add responsive navbar"\n\n# Switch back to main\ngit checkout main\n\n# Merge the feature\ngit merge feature/add-navbar\n\n# Delete the branch\ngit branch -d feature/add-navbar\n\n# View branch history\ngit log --oneline --graph --all`,
              solutionCode: `git checkout -b feature/add-navbar\ngit add .\ngit commit -m "feat: add responsive navbar"\ngit checkout main\ngit merge feature/add-navbar\ngit branch -d feature/add-navbar\ngit log --oneline --graph --all`,
              codeLanguage: 'bash',
              estimatedMinutes: 25,
              xpReward: 60,
              quiz: quiz('Branching Quiz', [
                mcq('What does `git checkout -b new-branch` do?', 'Creates and switches to a new branch', ['Deletes a branch', 'Merges a branch'], 'The `-b` flag creates the branch before switching.'),
                trueFalse('Merge conflicts must be resolved manually.', true, 'Git marks conflicts but you must decide what the final code should be.'),
                mcq('What is the `main` branch typically used for?', 'Production-ready code', ['Experimental features', 'Backup'], '`main` (or `master`) holds the stable, deployable codebase.'),
              ]),
            }),
          ],
        },
        {
          title: 'GitHub & Collaboration',
          lessons: [
            lesson('Pull Requests & Code Review', 'pull-requests', `# Pull Requests & Code Review

## Pushing to GitHub

\`\`\`bash
# Add remote
git remote add origin https://github.com/user/repo.git

# Push branch
git push -u origin main
git push origin feature/my-feature
\`\`\`

## Pull Request Workflow
1. Create a feature branch locally
2. Push the branch to GitHub
3. Open a Pull Request (PR) on GitHub
4. Teammates review your code
5. Address feedback with new commits
6. Merge the PR

## Pulling Changes

\`\`\`bash
git pull origin main           # Fetch + merge
git fetch origin               # Fetch only (safer)
git merge origin/main          # Then merge manually
\`\`\`

## Forking Workflow (Open Source)
1. **Fork** the repository on GitHub
2. **Clone** your fork locally
3. Create a branch, make changes
4. Push to your fork
5. Open a PR to the original repo

## Best Practices
- Keep PRs small and focused
- Write descriptive PR titles and descriptions
- Respond to review comments promptly
- Squash commits before merging if needed`, {
              starterCode: `# GitHub collaboration commands\n\n# Clone a repository\ngit clone https://github.com/user/repo.git\n\n# Create a feature branch\ngit checkout -b feature/update-readme\n\n# After making changes\ngit add .\ngit commit -m "docs: update README with setup instructions"\n\n# Push to remote\ngit push -u origin feature/update-readme\n\n# After PR is merged, update local main\ngit checkout main\ngit pull origin main`,
              solutionCode: `git clone https://github.com/user/repo.git\ngit checkout -b feature/update-readme\ngit add .\ngit commit -m "docs: update README with setup instructions"\ngit push -u origin feature/update-readme\ngit checkout main\ngit pull origin main`,
              codeLanguage: 'bash',
              estimatedMinutes: 20,
              xpReward: 50,
              quiz: quiz('GitHub Quiz', [
                mcq('What is a Pull Request?', 'A request to merge your branch into another branch', ['A request to download code', 'A way to delete branches'], 'PRs let teammates review your changes before merging.'),
                trueFalse('`git pull` is equivalent to `git fetch` + `git merge`.', true),
              ]),
            }),
          ],
        },
      ],
    },

    // ━━━━━━━━━━━━ DOCKER & CONTAINERS ━━━━━━━━━━━━
    {
      title: 'Docker & Containers',
      slug: 'docker-containers',
      description: 'Containerize applications with Docker — images, Dockerfiles, Compose, networking, and volumes for reproducible deployments.',
      difficulty: 'intermediate',
      language: 'en',
      estimatedHours: 20,
      resources: [
        { resourceType: 'youtube', title: 'Docker Crash Course', url: 'https://www.youtube.com/watch?v=pg19Z8LL06w', author: 'TechWorld with Nana', platform: 'YouTube' },
        { resourceType: 'article', title: 'Docker Official Docs', url: 'https://docs.docker.com/get-started/', author: 'Docker Inc.' },
      ],
      modules: [
        {
          title: 'Docker Fundamentals',
          lessons: [
            setupLesson('Docker & Containers', 'docker-containers', 'bash',
              `1. Install [Docker Desktop](https://www.docker.com/products/docker-desktop/)
2. Verify: \`docker --version\` and \`docker compose version\`
3. Run hello-world: \`docker run hello-world\``,
              `# Verify Docker installation\ndocker --version\ndocker run hello-world`,
              `docker --version\ndocker run hello-world`
            ),
            lesson('Images & Containers', 'docker-images-containers', `# Images & Containers

## Key Concepts
- **Image**: A blueprint (like a class) — read-only template
- **Container**: A running instance (like an object) — isolated process

## Essential Commands

\`\`\`bash
# Pull an image
docker pull nginx

# Run a container
docker run -d --name my-nginx -p 8080:80 nginx

# List containers
docker ps          # Running
docker ps -a       # All (including stopped)

# Stop / Remove
docker stop my-nginx
docker rm my-nginx

# List images
docker images
docker rmi nginx   # Remove image
\`\`\`

## Dockerfile — Build Your Own Image

\`\`\`dockerfile
FROM node:20-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 3000
CMD ["node", "server.js"]
\`\`\`

## Building & Running

\`\`\`bash
docker build -t my-app:1.0 .
docker run -d -p 3000:3000 my-app:1.0
\`\`\`

## Best Practices
- Use small base images (alpine variants)
- Layer cache: put rarely-changing steps first
- Use \`.dockerignore\` to exclude node_modules, .git
- Don't run as root — use \`USER\` directive`, {
              starterCode: `# Docker workflow\n\n# Pull and run nginx\ndocker pull nginx:alpine\ndocker run -d --name web -p 8080:80 nginx:alpine\n\n# Check it's running\ndocker ps\n\n# View logs\ndocker logs web\n\n# Stop and remove\ndocker stop web\ndocker rm web`,
              solutionCode: `docker pull nginx:alpine\ndocker run -d --name web -p 8080:80 nginx:alpine\ndocker ps\ndocker logs web\ndocker stop web\ndocker rm web`,
              codeLanguage: 'bash',
              estimatedMinutes: 25,
              xpReward: 60,
              quiz: quiz('Docker Basics Quiz', [
                mcq('What is the relationship between an image and a container?', 'An image is a template; a container is a running instance', ['They are the same thing', 'A container creates images'], 'Think of images as blueprints and containers as running processes.'),
                mcq('What does `-p 8080:80` do in `docker run`?', 'Maps host port 8080 to container port 80', ['Exposes port 8080 only', 'Maps container 8080 to host 80'], 'Format is HOST:CONTAINER — left is host, right is container.'),
                trueFalse('A Dockerfile is used to build custom Docker images.', true),
              ]),
            }),
            lesson('Docker Compose', 'docker-compose', `# Docker Compose

## What is Docker Compose?
Define and run multi-container applications with a YAML file.

## docker-compose.yml

\`\`\`yaml
version: '3.8'
services:
  app:
    build: .
    ports:
      - "3000:3000"
    environment:
      - DATABASE_URL=postgres://user:pass@db:5432/mydb
    depends_on:
      - db
    volumes:
      - ./src:/app/src   # Hot reload

  db:
    image: postgres:16-alpine
    environment:
      POSTGRES_USER: user
      POSTGRES_PASSWORD: pass
      POSTGRES_DB: mydb
    volumes:
      - pgdata:/var/lib/postgresql/data
    ports:
      - "5432:5432"

volumes:
  pgdata:
\`\`\`

## Commands

\`\`\`bash
docker compose up -d          # Start all services
docker compose down           # Stop and remove
docker compose logs -f app    # Follow logs
docker compose exec app sh    # Shell into container
docker compose build          # Rebuild images
\`\`\`

## Volumes
- **Named volumes**: Persist data (e.g., database)
- **Bind mounts**: Sync local files for development

## Networking
Compose creates a default network — services can reach each other by **service name** (e.g., \`db\` resolves to the database container).`, {
              starterCode: `# Docker Compose workflow\n\n# Start all services in background\ndocker compose up -d\n\n# Check running services\ndocker compose ps\n\n# View logs\ndocker compose logs -f\n\n# Execute a command in a running container\ndocker compose exec app sh\n\n# Stop everything\ndocker compose down`,
              solutionCode: `docker compose up -d\ndocker compose ps\ndocker compose logs -f\ndocker compose exec app sh\ndocker compose down`,
              codeLanguage: 'bash',
              estimatedMinutes: 25,
              xpReward: 60,
              quiz: quiz('Docker Compose Quiz', [
                mcq('What does `depends_on` do in Compose?', 'Controls startup order of services', ['Links containers together', 'Shares volumes'], '`depends_on` ensures the dependency starts before the dependent service.'),
                trueFalse('Services in Docker Compose can communicate by service name.', true, 'Compose sets up a default network where service names resolve to container IPs.'),
              ]),
            }),
          ],
        },
      ],
    },

    // ━━━━━━━━━━━━ CI/CD PIPELINES ━━━━━━━━━━━━
    {
      title: 'CI/CD Pipelines',
      slug: 'cicd-pipelines',
      description: 'Automate testing, building, and deploying with GitHub Actions. Learn continuous integration and deployment best practices.',
      difficulty: 'intermediate',
      language: 'en',
      estimatedHours: 15,
      resources: [
        { resourceType: 'article', title: 'GitHub Actions Documentation', url: 'https://docs.github.com/en/actions', author: 'GitHub' },
        { resourceType: 'youtube', title: 'GitHub Actions Tutorial', url: 'https://www.youtube.com/watch?v=R8_veQiYBjI', author: 'TechWorld with Nana', platform: 'YouTube' },
      ],
      modules: [
        {
          title: 'CI/CD with GitHub Actions',
          lessons: [
            lesson('What is CI/CD?', 'what-is-cicd', `# What is CI/CD?

## Continuous Integration (CI)
Automatically **build and test** code every time changes are pushed.

## Continuous Deployment (CD)
Automatically **deploy** to production after tests pass.

## The CI/CD Pipeline

\`\`\`
Push Code → Build → Test → Deploy
\`\`\`

## Benefits
- Catch bugs early
- Automated testing on every push
- Consistent deployments
- Faster release cycles

## GitHub Actions Workflow File

\`\`\`yaml
# .github/workflows/ci.yml
name: CI Pipeline

on:
  push:
    branches: [main]
  pull_request:
    branches: [main]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 20
      - run: npm ci
      - run: npm test
      - run: npm run build
\`\`\`

## Key Concepts
- **Workflow**: Automated process defined in YAML
- **Job**: A set of steps that run on the same runner
- **Step**: An individual task (run command or use action)
- **Runner**: The machine that executes the job
- **Trigger**: Event that starts the workflow (push, PR, schedule)`, {
              starterCode: `# GitHub Actions YAML structure\n# File: .github/workflows/ci.yml\n\nname: CI Pipeline\n\non:\n  push:\n    branches: [main]\n  pull_request:\n    branches: [main]\n\njobs:\n  build-and-test:\n    runs-on: ubuntu-latest\n    steps:\n      - name: Checkout code\n        uses: actions/checkout@v4\n\n      - name: Setup Node.js\n        uses: actions/setup-node@v4\n        with:\n          node-version: 20\n\n      - name: Install dependencies\n        run: npm ci\n\n      - name: Run tests\n        run: npm test\n\n      - name: Build\n        run: npm run build`,
              solutionCode: `name: CI Pipeline\non:\n  push:\n    branches: [main]\n  pull_request:\n    branches: [main]\njobs:\n  build-and-test:\n    runs-on: ubuntu-latest\n    steps:\n      - uses: actions/checkout@v4\n      - uses: actions/setup-node@v4\n        with:\n          node-version: 20\n      - run: npm ci\n      - run: npm test\n      - run: npm run build`,
              codeLanguage: 'yaml',
              estimatedMinutes: 20,
              xpReward: 50,
              quiz: quiz('CI/CD Quiz', [
                mcq('What does CI stand for?', 'Continuous Integration', ['Continuous Installation', 'Code Inspection'], 'CI means automatically building and testing code on every change.'),
                mcq('What triggers a GitHub Actions workflow?', 'Events like push, pull_request, or schedule', ['Manual clicking only', 'Cron jobs only'], 'Workflows are triggered by repository events defined in the `on:` section.'),
                trueFalse('CI/CD helps catch bugs before they reach production.', true),
              ]),
            }),
          ],
        },
      ],
    },

    // ━━━━━━━━━━━━ LINUX COMMAND LINE ━━━━━━━━━━━━
    {
      title: 'Linux Command Line',
      slug: 'linux-command-line',
      description: 'Become fluent in the terminal — navigate the file system, manage permissions, write shell scripts, and automate tasks.',
      difficulty: 'beginner',
      language: 'en',
      estimatedHours: 15,
      resources: [
        { resourceType: 'youtube', title: 'Linux for Beginners', url: 'https://www.youtube.com/watch?v=sWbUDq4S6Y8', author: 'NetworkChuck', platform: 'YouTube' },
        { resourceType: 'ebook', title: 'The Linux Command Line (Free)', url: 'https://linuxcommand.org/tlcl.php', author: 'William Shotts' },
      ],
      modules: [
        {
          title: 'Terminal Essentials',
          lessons: [
            lesson('Navigating the File System', 'navigating-filesystem', `# Navigating the File System

## Essential Navigation

\`\`\`bash
pwd                  # Print working directory
ls                   # List files
ls -la               # List all files (including hidden) with details
cd /home/user        # Change directory
cd ..                # Go up one level
cd ~                 # Go to home directory
cd -                 # Go to previous directory
\`\`\`

## File Operations

\`\`\`bash
touch file.txt       # Create empty file
mkdir my-folder      # Create directory
mkdir -p a/b/c       # Create nested directories
cp file.txt copy.txt # Copy file
mv old.txt new.txt   # Rename/move file
rm file.txt          # Delete file
rm -rf folder/       # Delete folder recursively
\`\`\`

## Viewing File Contents

\`\`\`bash
cat file.txt         # Print entire file
head -n 10 file.txt  # First 10 lines
tail -n 10 file.txt  # Last 10 lines
less file.txt        # Paginated view (q to quit)
wc -l file.txt       # Count lines
\`\`\`

## Searching

\`\`\`bash
find . -name "*.js"            # Find files by name
grep "error" log.txt           # Search for text in file
grep -r "TODO" ./src/          # Recursive search
grep -i "hello" file.txt       # Case-insensitive
\`\`\`

## Pipes & Redirection

\`\`\`bash
ls -la | grep ".txt"           # Pipe output to grep
echo "Hello" > file.txt        # Write (overwrite)
echo "World" >> file.txt       # Append
cat file.txt | sort | uniq     # Chain commands
\`\`\``, {
              starterCode: `# File system navigation\npwd\nls -la\n\n# Create a project structure\nmkdir -p project/{src,tests,docs}\ntouch project/src/main.py\ntouch project/tests/test_main.py\ntouch project/README.md\n\n# List the structure\nfind project -type f\n\n# Search for files\nfind project -name "*.py"`,
              solutionCode: `pwd\nls -la\nmkdir -p project/{src,tests,docs}\ntouch project/src/main.py\ntouch project/tests/test_main.py\ntouch project/README.md\nfind project -type f\nfind project -name "*.py"`,
              codeLanguage: 'bash',
              estimatedMinutes: 20,
              xpReward: 50,
              quiz: quiz('Linux Navigation Quiz', [
                mcq('What does `ls -la` show?', 'All files including hidden ones with detailed info', ['Only directories', 'Only hidden files'], '`-l` for long format, `-a` for all (including hidden).'),
                mcq('What does `|` (pipe) do?', 'Sends output of one command as input to another', ['Runs commands in parallel', 'Saves output to a file'], 'Pipes connect the stdout of one command to the stdin of the next.'),
                trueFalse('`rm -rf /` is safe to run.', false, 'This recursively deletes everything from root — NEVER run this!'),
              ]),
            }),
            lesson('Permissions & Shell Scripting', 'permissions-scripting', `# Permissions & Shell Scripting

## File Permissions

\`\`\`bash
ls -la
# -rwxr-xr-- 1 user group 1234 Jan 1 file.sh
#  ^^^         Owner permissions (rwx)
#     ^^^      Group permissions (r-x)
#        ^^^   Others permissions (r--)
\`\`\`

## Changing Permissions

\`\`\`bash
chmod 755 script.sh    # rwxr-xr-x
chmod +x script.sh     # Add execute permission
chmod u+w file.txt     # Add write for owner
\`\`\`

## Common Permission Numbers
| Number | Permission |
|--------|-----------|
| 7 | rwx (read+write+execute) |
| 6 | rw- (read+write) |
| 5 | r-x (read+execute) |
| 4 | r-- (read only) |

## Shell Scripting

\`\`\`bash
#!/bin/bash

# Variables
NAME="Alice"
echo "Hello, $NAME!"

# Conditionals
if [ -f "config.txt" ]; then
    echo "Config found!"
else
    echo "Config missing!"
fi

# Loops
for file in *.txt; do
    echo "Processing: $file"
done

# Functions
greet() {
    echo "Welcome, $1!"
}
greet "Developer"
\`\`\``, {
              starterCode: `#!/bin/bash\n\n# Simple backup script\nBACKUP_DIR="backups"\nDATE=$(date +%Y-%m-%d)\n\n# Create backup directory\nmkdir -p $BACKUP_DIR\n\n# Count files to backup\nFILE_COUNT=$(find . -maxdepth 1 -name "*.txt" | wc -l)\necho "Found $FILE_COUNT text files to process"\n\n# Process each file\nfor file in *.txt; do\n    if [ -f "$file" ]; then\n        echo "Processing: $file"\n    fi\ndone\n\necho "Done! Backup date: $DATE"`,
              solutionCode: `#!/bin/bash\nBACKUP_DIR="backups"\nDATE=$(date +%Y-%m-%d)\nmkdir -p $BACKUP_DIR\nFILE_COUNT=$(find . -maxdepth 1 -name "*.txt" | wc -l)\necho "Found $FILE_COUNT text files to process"\nfor file in *.txt; do\n    if [ -f "$file" ]; then\n        echo "Processing: $file"\n    fi\ndone\necho "Done! Backup date: $DATE"`,
              codeLanguage: 'bash',
              estimatedMinutes: 25,
              xpReward: 60,
              quiz: quiz('Permissions & Scripting Quiz', [
                mcq('What does `chmod 755` set?', 'Owner: rwx, Group: r-x, Others: r-x', ['Everyone: full access', 'Owner only: read'], '7=rwx, 5=r-x — owner has full access, others can read and execute.'),
                trueFalse('Shell scripts start with `#!/bin/bash` (shebang).', true, 'The shebang tells the system which interpreter to use.'),
              ]),
            }),
          ],
        },
      ],
    },
  ],
};
