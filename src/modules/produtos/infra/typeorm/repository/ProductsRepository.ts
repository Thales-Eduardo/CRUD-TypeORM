import { getRepository, Repository } from 'typeorm';

import { IProductsRepository } from '@modules/produtos/repositories/IProductsRepositories';
import { ICreateProductsDTOS } from '@modules/produtos/dtos/ICreateProductsDTO';

import Product from '../entities/Product';
import Category from '../entities/Category';

export class ProductsRepository implements IProductsRepository {
  private ProductRepository: Repository<Product>;
  private CategoryRepository: Repository<Category>;

  constructor() {
    this.ProductRepository = getRepository(Product);
    this.CategoryRepository = getRepository(Category);
  }

  public async create(data: ICreateProductsDTOS): Promise<Product> {
    const product = this.ProductRepository.create();

    await this.ProductRepository.save(product);

    return product;
  }

  public async update(data: Product): Promise<Product> {
    return await this.ProductRepository.save(data);
  }

  public async findById(id: string): Promise<Product | undefined> {
    return await this.ProductRepository.findOne(id);
  }

  public async delete(id: string): Promise<void> {
    const product = await this.ProductRepository.findOne(id);
    if (product) {
      await this.ProductRepository.remove(product);
    }
  }
}
