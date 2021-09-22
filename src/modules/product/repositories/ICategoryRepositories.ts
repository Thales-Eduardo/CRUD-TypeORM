import Category from '../infra/typeorm/entities/Category';

export interface ICategoryRepositories {
  FindAllCategories(limit: number, page: number): Promise<Category[]>;
  findByIdCategory(id: string): Promise<Category | undefined>;
  updateCategory(data: Category): Promise<Category>;
}
