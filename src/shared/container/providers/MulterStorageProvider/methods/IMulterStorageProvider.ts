export interface IMulterStorageProvider {
  saveFile(file: string): Promise<string>;
  deleteFile(file: string): Promise<void>;
}
