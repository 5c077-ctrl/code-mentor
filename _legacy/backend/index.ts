import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import rateLimit from 'express-rate-limit';
import { createServer } from 'http';
import { Server } from 'socket.io';
import authRoutes from './routes/auth';
import userRoutes from './routes/users';
import lessonRoutes from './routes/lessons';
import quizRoutes from './routes/quiz';
import xpRoutes from './routes/xp';

const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer, { cors: { origin: process.env.FRONTEND_URL || '*' } });

// Security Middleware
app.use(helmet());
app.use(cors({ origin: process.env.FRONTEND_URL || 'http://localhost:8081', credentials: true }));
app.use(express.json({ limit: '10kb' }));

// Global rate limiter
app.use(rateLimit({ windowMs: 15 * 60 * 1000, max: 100 }));

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);
app.use('/api/lessons', lessonRoutes);
app.use('/api/quiz', quizRoutes);
app.use('/api/xp', xpRoutes);

// Health check
app.get('/health', (_req, res) => res.json({ status: 'ok', app: 'CODE MENTOR API' }));

// Socket.io for real-time XP
io.on('connection', (socket) => {
  console.log('User connected:', socket.id);
  socket.on('join_user', (userId: string) => socket.join(`user_${userId}`));
  socket.on('disconnect', () => console.log('User disconnected:', socket.id));
});
export { io };

const PORT = process.env.PORT || 3001;
httpServer.listen(PORT, () => console.log(`🚀 CODE MENTOR API running on port ${PORT}`));