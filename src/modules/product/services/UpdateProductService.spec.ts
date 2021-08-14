import 'reflect-metadata';

import { UpdateProductService } from './UpdateProductService';
import { FakeProductRepositories } from '../repositories/fakes/FakeProductRepositories';

import { AppErrors } from '@shared/errors/AppErrors';

let fakeProductRepositories: FakeProductRepositories;
let updateProductService: UpdateProductService;

describe('UpdateProduct', () => {
  beforeEach(() => {
    fakeProductRepositories = new FakeProductRepositories();

    updateProductService = new UpdateProductService(fakeProductRepositories);
  });

  it('must be able to update the products', async () => {
    const product = await fakeProductRepositories.create({
      name: 'bola de basquete',
      category: 'Esportes',
      price: 13.3,
      value: 8,
    });

    const upedate = await updateProductService.execute({
      id: product.id,
      name: 'Bola',
      category: 'Esportes',
      price: 13.3,
      value: 8,
    });

    expect(upedate.name).toBe('Bola');
  });

  it('not must be able to update the products', async () => {
    expect(
      updateProductService.execute({
        id: 'fake-id',
        name: 'Bola',
        category: 'Esportes',
        price: 13.3,
        value: 8,
      }),
    ).rejects.toBeInstanceOf(AppErrors);
  });
});
