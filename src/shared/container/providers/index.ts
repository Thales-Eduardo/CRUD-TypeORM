import { container } from 'tsyringe';

//cache
import { CacheProvider } from './CacheProvider/implementations/CacheProvider';
import { ICacheProvider } from './CacheProvider/methods/ICacheProvider';

//avatar
import { MulterStorageProvider } from './MulterStorageProvider/implementations/MulterStorageProvider';
import { IMulterStorageProvider } from './MulterStorageProvider/methods/IMulterStorageProvider';

//avatar
container.registerSingleton<IMulterStorageProvider>(
  'MulterStorageProvider',
  MulterStorageProvider,
);

//cache
container.registerSingleton<ICacheProvider>('CacheProvider', CacheProvider);
