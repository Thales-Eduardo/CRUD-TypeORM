import { injectable, inject } from 'tsyringe';

import Product from '../infra/typeorm/entities/Product';

import { AppErrors } from '@shared/errors/AppErrors';
import { IProductsRepository } from '../repositories/IProductsRepositories';

interface IRequest {
  id: string;
}

@injectable()
export class FindAllProductService {
  constructor(
    @inject('ProductsRepository')
    private productsRepository: IProductsRepository,
  ) {}

  public async execute({ id }: IRequest): Promise<Product[]> {
    const verid = await this.productsRepository.findByCategoryId(id);

    if (!verid) {
      throw new AppErrors('Esse id esta incorreto.', 422);
    }

    const product = await this.productsRepository.findAllProduct(id);

    return product;
  }
}
