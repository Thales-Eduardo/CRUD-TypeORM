import { getRepository, Repository } from 'typeorm';

import { IProductsRepository } from '@modules/product/repositories/IProductsRepositories';
import { ICreateProductsDTOS } from '@modules/product/dtos/ICreateProductsDTO';

import Product from '../entities/Product';
import Category from '../entities/Category';

export class ProductsRepository implements IProductsRepository {
  private ProductRepository: Repository<Product>;
  private CategoryRepository: Repository<Category>;

  constructor() {
    this.ProductRepository = getRepository(Product);
    this.CategoryRepository = getRepository(Category);
  }

  public async create({
    category,
    name,
    price,
    value,
  }: ICreateProductsDTOS): Promise<Product> {
    let Category = await this.CategoryRepository.findOne({
      where: {
        category: category,
      },
    });

    if (!Category) {
      Category = this.CategoryRepository.create({
        category: category,
      });

      await this.CategoryRepository.save(Category);
    }

    const product = this.ProductRepository.create({
      name,
      price,
      value,
      category: Category,
    });

    await this.ProductRepository.save(product);

    return product;
  }

  public async findById(id: string): Promise<Product | undefined> {
    return await this.ProductRepository.findOne(id);
  }

  public async update(data: Product): Promise<Product> {
    return await this.ProductRepository.save(data);
  }

  public async delete(id: string): Promise<void> {
    const product = await this.ProductRepository.findOne(id);
    if (product) {
      await this.ProductRepository.remove(product);
    }
  }

  public async findByCategoryId({ id }: Product): Promise<Product | undefined> {
    return await this.ProductRepository.findOne({
      where: { category_id: id },
    });
  }

  public async findAllProduct(category_id: string): Promise<Product[]> {
    const idCategory = await this.CategoryRepository.findOne(category_id);

    const product = await this.ProductRepository.find({
      where: { category_id: idCategory },
    });

    return product;
  }
}
