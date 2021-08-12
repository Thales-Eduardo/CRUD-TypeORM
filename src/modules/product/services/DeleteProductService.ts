import { injectable, inject } from 'tsyringe';

import { AppErrors } from '@shared/errors/AppErrors';
import { IProductsRepository } from '../repositories/IProductsRepositories';
import { IMulterStorageProvider } from '@shared/container/providers/MulterStorageProvider/methods/IMulterStorageProvider';

interface IRequest {
  id: string;
}

@injectable()
export class DeleteProductService {
  constructor(
    @inject('ProductsRepository')
    private productsRepository: IProductsRepository,

    @inject('MulterStorageProvider')
    private multerStorageProvider: IMulterStorageProvider,
  ) {}

  public async execute({ id }: IRequest): Promise<void> {
    const checkId = await this.productsRepository.findById(id);

    if (!checkId) {
      throw new AppErrors('Esse id esta, incorreto.', 422);
    }

    await this.multerStorageProvider.deleteFile(checkId.avatar);

    await this.productsRepository.delete(id);
  }
}
