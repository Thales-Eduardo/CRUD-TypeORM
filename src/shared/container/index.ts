import { container } from 'tsyringe';

import { IProductsRepository } from '@modules/product/repositories/IProductsRepositories';
import { ProductsRepository } from '@modules/product/infra/typeorm/repository/ProductsRepository';

container.registerSingleton<IProductsRepository>(
  'ProductsRepository',
  ProductsRepository,
);
