import { container } from 'tsyringe';

import { IProductsRepository } from '@modules/product/repositories/IProductsRepositories';
import { ProductsRepository } from '@modules/product/infra/typeorm/repository/ProductsRepository';

import { ICategoryRepositories } from '@modules/product/repositories/ICategoryRepositories';
import { CategoryRepository } from '@modules/product/infra/typeorm/repository/CategoryRepository';

import './providers';

container.registerSingleton<IProductsRepository>(
  'ProductsRepository',
  ProductsRepository,
);

container.registerSingleton<ICategoryRepositories>(
  'CategoryRepository',
  CategoryRepository,
);
