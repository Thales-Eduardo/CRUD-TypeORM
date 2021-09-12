export interface ICacheProvider {
  save(key: string, value: any): Promise<void>;
  getCache<T>(key: string): Promise<T | null>;
  invalidate(key: string): Promise<void>;
  invalidatePrefix(key: string): Promise<void>;
}
