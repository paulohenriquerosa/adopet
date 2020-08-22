import 'reflect-metadata';
import 'express-async-errors';

import express, { Request, Response, NextFunction } from 'express';

import AppError from '@shared/error/AppError';
import '@shared/infra/typeorm';
import routes from './routes';

import '@shared/container';

const app = express();
app.use(express.json());

app.use(routes);

app.use((err: Error, request: Request, response: Response, _: NextFunction) => {
  if (err instanceof AppError) {
    return response.status(err.statusCode).json({
      message: err.message,
      status: 'error',
    });
  }

  console.log(err);
  return response.status(500).json({
    status: 'error',
    message: 'Internal',
  });
});

app.listen(3333, () => {
  console.log('🚀 Server started on port 3333!');
});
