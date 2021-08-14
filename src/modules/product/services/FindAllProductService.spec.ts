import 'reflect-metadata';

import { FindAllProductService } from './FindAllProductService';
import { FakeProductRepositories } from '../repositories/fakes/FakeProductRepositories';

import { AppErrors } from '@shared/errors/AppErrors';

let fakeProductRepositories: FakeProductRepositories;
let findAllProductService: FindAllProductService;

describe('FindAllProduct', () => {
  beforeEach(() => {
    fakeProductRepositories = new FakeProductRepositories();

    findAllProductService = new FindAllProductService(fakeProductRepositories);
  });

  it('must search all Product.', async () => {
    const product = await fakeProductRepositories.create({
      name: 'bola de basquete',
      category: 'Esportes',
      price: 13.3,
      value: 8,
    });

    const response = await findAllProductService.execute({
      id: product.category_id,
    });

    expect(response).toEqual([product]);
  });

  it('not must search all Product.', async () => {
    await expect(
      findAllProductService.execute({
        id: 'fake id',
      }),
    ).rejects.toBeInstanceOf(AppErrors);
  });
});
