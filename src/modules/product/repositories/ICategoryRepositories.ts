import Category from '../infra/typeorm/entities/Category';

export interface ICategoryRepositories {
  FindAllCategories(): Promise<Category[]>;
  findByIdCategory(id: string): Promise<Category | undefined>;
  updateCategory(data: Category): Promise<Category>;
}
