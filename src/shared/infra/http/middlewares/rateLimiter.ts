import { Request, Response, NextFunction } from 'express';
import { RateLimiterRedis } from 'rate-limiter-flexible';
import redis from 'redis';

import { AppErrors } from '@shared/errors/AppErrors';

const redisCache = redis.createClient({
  host: 'redis_bd',
  port: 6379,
  password: undefined,
  enable_offline_queue: false,
});

const limiter = new RateLimiterRedis({
  storeClient: redisCache,
  keyPrefix: 'middleware',
  points: 2, // 5 requests
  duration: 3, // per 1 second by IP
});

export async function rateLimiter(
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<void> {
  try {
    await limiter.consume(req.ip);

    return next();
  } catch (err) {
    throw new AppErrors(
      'O usuário enviou muitas solicitações em um determinado período de tempo',
      429,
    );
  }
}