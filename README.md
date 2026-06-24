# Code Mentor

Code Mentor is an enterprise-grade, AI-driven interactive learning platform designed for the modern developer. It bridges the gap between theory and practice by offering interactive coding environments directly in the browser, powered by real-time AI assistance to help learners overcome roadblocks.

## Features

- **Interactive Lessons**: Learn by doing with step-by-step interactive lessons.
- **In-Browser Code Execution**: Write and execute Python and JavaScript code without leaving the platform.
- **AI Mentor**: Get real-time streaming hints, code reviews, and explanations from an integrated AI tutor.
- **Quizzes & Progress Tracking**: Validate your knowledge and track your progress across modules.
- **Glassmorphism Design**: Enjoy a premium, visually stunning UI built with pure CSS modules.
- **Verifiable Certificates**: Earn certificates upon course completion.

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Vanilla CSS Modules (no Tailwind)
- **Database ORM**: Prisma
- **Database**: SQLite (Development) / PostgreSQL (Production)
- **Authentication**: JWT via `jose` and Next.js Middleware
- **State Management**: Zustand
- **Animations**: Framer Motion
- **Code Editor**: Monaco Editor (`@monaco-editor/react`)
- **AI Integration**: Anthropic Claude SDK

## Getting Started

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Configure Environment Variables**
   Rename `.env.local` to `.env` and provide the required variables:
   ```env
   DATABASE_URL="file:./dev.db"
   JWT_SECRET="your_secret_here"
   ANTHROPIC_API_KEY="your_anthropic_key"
   ```

3. **Initialize Database**
   ```bash
   npx prisma db push
   npx prisma db seed
   ```

4. **Run the Development Server**
   ```bash
   npm run dev
   ```

## Contributing

Please adhere to standard enterprise practices when contributing: maintain tests, follow the existing Next.js 15 App Router architecture, and keep styling constrained to CSS modules.

## License

MIT
