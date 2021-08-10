import { injectable, inject } from 'tsyringe';

import Product from '../infra/typeorm/entities/Product';

import { IProductsRepository } from '../repositories/IProductsRepositories';

interface IRequest {
  name: string;
  category: string;
  price: number;
  value: number;
}

@injectable()
export class CreateProductService {
  constructor(
    @inject('ProductsRepository')
    private productsRepository: IProductsRepository,
  ) {}

  public async execute({
    name,
    category,
    price,
    value,
  }: IRequest): Promise<Product> {
    const product = await this.productsRepository.create({
      name,
      category,
      price,
      value,
    });

    return product;
  }
}
