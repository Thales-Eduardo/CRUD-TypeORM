import { injectable, inject } from 'tsyringe';

import { AppErrors } from '@shared/errors/AppErrors';
import Product from '../infra/typeorm/entities/Product';

import { IProductsRepository } from '../repositories/IProductsRepositories';
import { ICategoryRepositories } from '../repositories/ICategoryRepositories';

import { IMulterStorageProvider } from '@shared/container/providers/MulterStorageProvider/methods/IMulterStorageProvider';

interface IRequest {
  id: string;
  avatarFileName: string;
}

@injectable()
export class UpdateAvatarProductService {
  constructor(
    @inject('ProductsRepository')
    private productsRepository: IProductsRepository & ICategoryRepositories,

    @inject('MulterStorageProvider')
    private multerStorageProvider: IMulterStorageProvider,
  ) {}

  public async execute({ id, avatarFileName }: IRequest): Promise<Product> {
    const product = await this.productsRepository.findById(id);

    if (!product) {
      throw new AppErrors('Esse id esta, incorreto.', 422);
    }

    if (product.avatar) {
      await this.multerStorageProvider.deleteFile(product.avatar);
    }

    const fileName = await this.multerStorageProvider.saveFile(avatarFileName);

    product.avatar = fileName;

    await this.productsRepository.update(product);

    return product;
  }
}
