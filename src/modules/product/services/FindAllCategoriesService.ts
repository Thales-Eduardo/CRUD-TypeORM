import { injectable, inject } from 'tsyringe';

import Category from '../infra/typeorm/entities/Category';

import { IProductsRepository } from '../repositories/IProductsRepositories';
import { ICategoryRepositories } from '../repositories/ICategoryRepositories';

interface Requeste {
  page: any;
  limit: any;
}

@injectable()
export class FindAllCategoriesService {
  constructor(
    @inject('ProductsRepository')
    private productsRepository: IProductsRepository & ICategoryRepositories,
  ) {}

  public async execute({ limit, page }: Requeste): Promise<Category[]> {
    const categories = await this.productsRepository.FindAllCategories(
      limit,
      page,
    );

    return categories;
  }
}
