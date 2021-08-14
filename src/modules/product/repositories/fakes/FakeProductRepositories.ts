import { v4 as uuid } from 'uuid';

import { IProductsRepository } from '../IProductsRepositories';
import { ICategoryRepositories } from '../ICategoryRepositories';

import { ICreateProductsDTOS } from '../../dtos/ICreateProductsDTO';

import Product from '../../infra/typeorm/entities/Product';
import Category from '../../infra/typeorm/entities/Category';

export class FakeProductRepositories
  implements IProductsRepository, ICategoryRepositories
{
  private product: Product[] = [];
  private category: Category[] = [];

  public async create({
    category,
    name,
    price,
    value,
  }: ICreateProductsDTOS): Promise<Product> {
    const product = new Product();
    const categoryMdl = new Category();

    categoryMdl.category = category;
    categoryMdl.id = uuid();
    this.category.push(categoryMdl);

    product.id = uuid();
    product.name = name;
    product.price = price;
    product.value = value;
    product.category_id = categoryMdl.id;

    this.product.push(product);

    return product;
  }

  public async findById(id: string): Promise<Product | undefined> {
    const findProduct = this.product.find((product) => product.id === id);
    return findProduct;
  }

  public async update(product: Product): Promise<Product> {
    const findProduct = this.product.findIndex(
      (findProduct) => findProduct.id === product.id,
    );

    this.product[findProduct] = product;
    return product;
  }

  public async delete(id: string): Promise<void> {
    const produtoIndex = this.product.findIndex(
      (produtos) => produtos.id === id,
    );
    this.product.splice(produtoIndex, 1);
  }

  public async findByCategoryId(id: string): Promise<Product | undefined> {
    const findProduct = this.product.find(
      (product) => product.category_id === id,
    );
    return findProduct;
  }

  public async findAllProduct(category_id: string): Promise<Product[]> {
    let product = this.product;

    if (category_id) {
      product = this.product.filter(
        (product) => product.category_id === category_id,
      );
    }

    return product;
  }

  public async FindAllCategories(): Promise<Category[]> {
    return this.category;
  }

  public async findByIdCategory(id: string): Promise<Category | undefined> {
    return this.category.find((item) => item.id === id);
  }

  public async updateCategory(data: Category): Promise<Category> {
    const findProduct = this.category.findIndex(
      (findcategory) => findcategory.id === data.id,
    );

    this.category[findProduct] = data;
    return data;
  }
}
