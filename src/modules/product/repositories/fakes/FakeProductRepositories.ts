import { v4 as uuid } from 'uuid';

import { IProductsRepository } from '../IProductsRepositories';
import { ICreateProductsDTOS } from '../../dtos/ICreateProductsDTO';

import Product from '../../infra/typeorm/entities/Product';

export class FakeProductRepositories implements IProductsRepository {
  private product: Product[] = [];

  public async findById(id: string): Promise<Product | undefined> {
    const findProduct = this.product.find((product) => product.id === id);
    return findProduct || undefined;
  }

  public async create(productData: ICreateProductsDTOS): Promise<Product> {
    const product = new Product();

    Object.assign(product, { id: uuid() }, productData);

    this.product.push(product);

    return product;
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

  public async findByCategoryId({ id }: Product): Promise<Product | undefined> {
    const findProduct = this.product.find((product) => product.id === id);
    return findProduct;
  }

  public async findAllProduct(category_id: string): Promise<Product[]> {
    let product = this.product;

    if (category_id) {
      product = this.product.filter((product) => product.id !== category_id);
    }

    return product;
  }
}
