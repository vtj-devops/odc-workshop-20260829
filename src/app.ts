import express, { Application, Request, Response, NextFunction } from 'express';
import cors from 'cors';
import taskRoutes from './routes/taskRoutes';
import logger from './utils/logger';

const app: Application = express();

// ミドルウェアの設定
app.use(cors());
app.use(express.json());

// リクエストログ用ミドルウェア
app.use((req: Request, res: Response, next: NextFunction) => {
  logger.info(`${req.method} ${req.url}`);
  next();
});

// ルーティングの設定
app.use('/api/tasks', taskRoutes);

// ヘルスチェック用エンドポイント
app.get('/health', (req: Request, res: Response) => {
  res.status(200).json({ status: 'OK', timestamp: new Date() });
});

export default app;
