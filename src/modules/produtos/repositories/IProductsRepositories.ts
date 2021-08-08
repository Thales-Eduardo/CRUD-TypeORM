import Product from '../infra/typeorm/entities/Product';
import { ICreateProductsDTOS } from '../dtos/ICreateProductsDTO';

export interface IProductsRepository {
  create(data: ICreateProductsDTOS): Promise<Product>;
  update(data: Product): Promise<Product>;
  findById(id: string): Promise<Product | undefined>;
  delete(id: string): Promise<void>;
}

//findByCategory(name: string): Promise<Product | undefined>;
