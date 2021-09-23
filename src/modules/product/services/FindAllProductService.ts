import { injectable, inject } from 'tsyringe';
import { classToClass } from 'class-transformer';

import Product from '../infra/typeorm/entities/Product';

import { AppErrors } from '@shared/errors/AppErrors';

import { IProductsRepository } from '../repositories/IProductsRepositories';
import { ICategoryRepositories } from '../repositories/ICategoryRepositories';
import { ICacheProvider } from '@shared/container/providers/CacheProvider/methods/ICacheProvider';

interface IRequest {
  id: string;
  page: any;
  limit: any;
}

@injectable()
export class FindAllProductService {
  constructor(
    @inject('ProductsRepository')
    private productsRepository: IProductsRepository & ICategoryRepositories,

    @inject('CacheProvider')
    private cacheProvider: ICacheProvider,
  ) {}

  public async execute({ id, limit, page }: IRequest): Promise<Product[]> {
    const checkId = await this.productsRepository.findByCategoryId(id);

    if (!checkId) {
      throw new AppErrors('Esse id esta, incorreto.', 422);
    }

    const cacheKey = `product:${id}-${page}-${limit}`;

    let product = await this.cacheProvider.getCache<Product[]>(cacheKey);

    if (!product) {
      product = await this.productsRepository.findAllProduct(id, limit, page);
      await this.cacheProvider.save(cacheKey, classToClass(product));
    }

    return product;
  }
}
