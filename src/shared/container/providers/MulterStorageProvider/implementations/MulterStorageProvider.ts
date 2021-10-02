import fs from 'fs/promises';
import path from 'path';

import uploadConfig from '@config/upload';
import { IMulterStorageProvider } from '../methods/IMulterStorageProvider';

class MulterStorageProvider implements IMulterStorageProvider {
  public async saveFile(file: string): Promise<string> {
    await fs.rename(
      path.resolve(uploadConfig.directory, file),
      path.resolve(uploadConfig.directory, file),
    );

    return file;
  }

  public async deleteFile(file: string): Promise<void> {
    if (file) {
      const filepath = path.resolve(uploadConfig.directory, file);

      try {
        await fs.stat(filepath);
      } catch {
        return;
      }

      await fs.unlink(filepath);
    }
  }
}

export { MulterStorageProvider };
