import { injectable, inject } from 'tsyringe';

import Category from '../infra/typeorm/entities/Category';

import { IProductsRepository } from '../repositories/IProductsRepositories';
import { ICategoryRepositories } from '../repositories/ICategoryRepositories';

@injectable()
export class FindAllCategoriesService {
  constructor(
    @inject('ProductsRepository')
    private productsRepository: IProductsRepository & ICategoryRepositories,
  ) {}

  public async execute(): Promise<Category[]> {
    const categories = await this.productsRepository.FindAllCategories();

    return categories;
  }
}
