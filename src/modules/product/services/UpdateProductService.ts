import { injectable, inject } from 'tsyringe';

import { AppErrors } from '@shared/errors/AppErrors';

import { IProductsRepository } from '../repositories/IProductsRepositories';
import { ICategoryRepositories } from '../repositories/ICategoryRepositories';
import { ICacheProvider } from '@shared/container/providers/CacheProvider/methods/ICacheProvider';

import Product from '../infra/typeorm/entities/Product';

interface IRequest {
  id: string;
  name: string;
  category: string;
  price: number;
  value: number;
}

@injectable()
export class UpdateProductService {
  constructor(
    @inject('ProductsRepository')
    private productsRepository: IProductsRepository & ICategoryRepositories,

    @inject('CacheProvider')
    private cacheProvider: ICacheProvider,
  ) {}

  public async execute({
    id,
    category,
    name,
    price,
    value,
  }: IRequest): Promise<Product> {
    const product = await this.productsRepository.findById(id);

    if (!product) {
      throw new AppErrors('Esse id esta, incorreto.', 422);
    }

    const categoryId = await this.productsRepository.findByIdCategory(
      product.category_id,
    );

    if (categoryId) {
      categoryId.category = category;
      await this.productsRepository.updateCategory(categoryId);
    }

    product.name = name;
    product.price = price;
    product.value = value;

    const response = await this.productsRepository.update(product);
    await this.cacheProvider.invalidatePrefix('product');

    return response;
  }
}
