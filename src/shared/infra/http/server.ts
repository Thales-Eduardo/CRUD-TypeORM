import 'reflect-metadata';

import express, { Request, Response, NextFunction } from 'express';
import cors from 'cors';
import 'express-async-errors';

import '@shared/infra/typeorm';
import uploadCofig from '@config/upload';

import router from './routes';
import { AppErrors } from '@shared/errors/AppErrors';

import '@shared/container';

const app = express();
const port = 3333;

app.use(express.json());
app.use(cors());
app.use('/files', express.static(uploadCofig.directory));
app.use(router);

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  if (err instanceof AppErrors) {
    return res.status(err.statusCode).json({
      status: 'error',
      message: err.message,
    });
  }

  console.error(err);

  return res.status(500).json({
    status: 'error',
    message: 'Internal server error',
  });
});

app.listen(port, () => {
  console.log(`http://localhost:${port} 🔥🔥🚒`);
  console.log(`http://localhost:${port}/files/`);
});
