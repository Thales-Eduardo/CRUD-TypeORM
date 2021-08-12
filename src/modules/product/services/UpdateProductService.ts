import { injectable, inject } from 'tsyringe';

import { AppErrors } from '@shared/errors/AppErrors';
import { IProductsRepository } from '../repositories/IProductsRepositories';
import { ICategoryRepositories } from '../repositories/ICategoryRepositories';

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
    private productsRepository: IProductsRepository,
    @inject('CategoryRepository')
    private categoryRepository: ICategoryRepositories,
  ) {}

  public async execute({
    id,
    category,
    name,
    price,
    value,
  }: IRequest): Promise<Object> {
    const product = await this.productsRepository.findById(id);

    if (!product) {
      throw new AppErrors('Esse id esta, incorreto.', 422);
    }

    const categoryId = await this.categoryRepository.findById(
      product.category_id,
    );

    if (categoryId) {
      categoryId.category = category;
      await this.categoryRepository.update(categoryId);
    }

    product.name = name;
    product.price = price;
    product.value = value;

    await this.productsRepository.update(product);

    return { product, categoryId };
  }
}
