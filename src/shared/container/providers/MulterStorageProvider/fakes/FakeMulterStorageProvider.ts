import { IMulterStorageProvider } from '../methods/IMulterStorageProvider';

export class FakeMulterStorageProvider implements IMulterStorageProvider {
  private storage: string[] = [];

  public async saveFile(file: string): Promise<string> {
    this.storage.push(file);
    return file;
  }

  public async deleteFile(file: string): Promise<void> {
    const findeIndex = this.storage.findIndex((item) => item === file);

    this.storage.splice(findeIndex, 1);
  }
}
