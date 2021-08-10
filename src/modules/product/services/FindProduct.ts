import { injectable, inject } from 'tsyringe';

import Product from '../infra/typeorm/entities/Product';

import { IProductsRepository } from '../repositories/IProductsRepositories';

interface IRequest {
  category_id: string;
}

@injectable()
export class FindProduct {
  constructor(
    @inject('ProductsRepository')
    private productsRepository: IProductsRepository,
  ) {}

  public async execute({}: IRequest): Promise<void> {}
}
