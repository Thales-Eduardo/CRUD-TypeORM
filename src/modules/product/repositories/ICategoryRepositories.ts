import Category from '../infra/typeorm/entities/Category';

export interface ICategoryRepositories {
  FindAllCategories(): Promise<Category[]>;
  findById(id: string): Promise<Category | undefined>;
  update(data: Category): Promise<Category>;
}
