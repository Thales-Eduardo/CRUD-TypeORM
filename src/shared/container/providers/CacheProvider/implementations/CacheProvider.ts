import Redis, { Redis as RedisClient } from 'ioredis';

import { ICacheProvider } from '../methods/ICacheProvider';

export class CacheProvider implements ICacheProvider {
  private client: RedisClient;

  constructor() {
    this.client = new Redis({
      port: 6379, // Redis port
      host: 'redis_bd', // Redis host
      family: 4, // 4 (IPv4) or 6 (IPv6)
      password: undefined,
      db: 0,
    });
  }

  public async save(key: string, value: any): Promise<void> {
    this.client.set(key, JSON.stringify(value));
  }

  public async getCache<T>(key: string): Promise<T | null> {
    const data = await this.client.get(key);
    if (!data) {
      return null;
    }
    const parseData = JSON.parse(data) as T;
    return parseData;
  }

  public async invalidate(key: string): Promise<void> {
    await this.client.del(key);
  }

  public async invalidatePrefix(key: string): Promise<void> {
    const keys = await this.client.keys(`${key}:*`);

    const pipeline = this.client.pipeline();

    keys.forEach((key) => {
      pipeline.del(key);
    });

    await pipeline.exec();
  }
}
