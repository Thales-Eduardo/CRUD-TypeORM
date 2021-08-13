import 'reflect-metadata';

import { CreateProductService } from './CreateProductService';
import { FakeProductRepositories } from '../repositories/fakes/FakeProductRepositories';

let fakeProductRepositories: FakeProductRepositories;
let createProductService: CreateProductService;

describe('CreateProduct', () => {
  beforeEach(() => {
    fakeProductRepositories = new FakeProductRepositories();
    createProductService = new CreateProductService(fakeProductRepositories);
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
