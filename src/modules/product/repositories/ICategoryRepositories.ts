import Category from '../infra/typeorm/entities/Category';

export interface ICategoryRepositories {
  FindAllCategories(): Promise<Category[]>;
}
