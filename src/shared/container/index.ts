import { container } from 'tsyringe';

import { IProductsRepository } from '@modules/product/repositories/IProductsRepositories';
import { ProductsRepository } from '@modules/product/infra/typeorm/repository/ProductsRepository';

import { ICategoryRepositories } from '@modules/product/repositories/ICategoryRepositories';

import './providers';

container.registerSingleton<IProductsRepository & ICategoryRepositories>(
  'ProductsRepository',
  ProductsRepository,
);
