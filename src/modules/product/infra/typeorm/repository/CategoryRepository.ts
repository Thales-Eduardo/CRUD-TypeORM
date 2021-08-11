import { getRepository, Repository } from 'typeorm';

import Category from '../entities/Category';
import { ICategoryRepositories } from '@modules/product/repositories/ICategoryRepositories';

export class CategoryRepository implements ICategoryRepositories {
  private CategoryRepository: Repository<Category>;

  constructor() {
    this.CategoryRepository = getRepository(Category);
  }

  public async FindAllCategories(): Promise<Category[]> {
    return await this.CategoryRepository.find();
  }
}
