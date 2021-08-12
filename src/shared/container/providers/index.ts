import { container } from 'tsyringe';

import { MulterStorageProvider } from './MulterStorageProvider/implementations/MulterStorageProvider';
import { IMulterStorageProvider } from './MulterStorageProvider/methods/IMulterStorageProvider';

container.registerSingleton<IMulterStorageProvider>(
  'MulterStorageProvider',
  MulterStorageProvider,
);
