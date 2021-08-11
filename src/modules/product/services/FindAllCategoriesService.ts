import { injectable, inject } from 'tsyringe';

import Category from '../infra/typeorm/entities/Category';

import { AppErrors } from '@shared/errors/AppErrors';
import { ICategoryRepositories } from '../repositories/ICategoryRepositories';

interface IRequest {
  id: string;
}

@injectable()
export class FindAllCategoriesService {
  constructor(
    @inject('CategoryRepository')
    private categoryRepository: ICategoryRepositories,
  ) {}

  public async execute(): Promise<Category[]> {
    const categories = await this.categoryRepository.FindAllCategories();

    if (!categories) {
      throw new AppErrors('Não existe nenhuma categoria.');
    }

    return categories;
  }
}
