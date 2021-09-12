import 'reflect-metadata';

import { FindAllProductService } from './FindAllProductService';
import { FakeProductRepositories } from '../repositories/fakes/FakeProductRepositories';
import { FakeCacheProvider } from '@shared/container/providers/CacheProvider/fakes/FakeCacheProvider';

import { AppErrors } from '@shared/errors/AppErrors';

let fakeProductRepositories: FakeProductRepositories;
let fakeCacheProvider: FakeCacheProvider;
let findAllProductService: FindAllProductService;

describe('FindAllProduct', () => {
  beforeEach(() => {
    fakeProductRepositories = new FakeProductRepositories();
    fakeCacheProvider = new FakeCacheProvider();
    findAllProductService = new FindAllProductService(
      fakeProductRepositories,
      fakeCacheProvider,
    );
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
