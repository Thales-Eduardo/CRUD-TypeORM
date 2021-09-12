import 'reflect-metadata';

import { CreateProductService } from './CreateProductService';
import { FakeProductRepositories } from '../repositories/fakes/FakeProductRepositories';
import { FakeCacheProvider } from '@shared/container/providers/CacheProvider/fakes/FakeCacheProvider';

let fakeProductRepositories: FakeProductRepositories;
let fakeCacheProvider: FakeCacheProvider;
let createProductService: CreateProductService;

describe('CreateProduct', () => {
  beforeEach(() => {
    fakeProductRepositories = new FakeProductRepositories();
    fakeCacheProvider = new FakeCacheProvider();
    createProductService = new CreateProductService(
      fakeProductRepositories,
      fakeCacheProvider,
    );
  });

  it('should be able to create a new product', async () => {
    const product = await createProductService.execute({
      name: 'Bola',
      category: 'Esportes',
      price: 13.3,
      value: 8,
    });

    expect(product).toHaveProperty('id');
  });
});
