import 'reflect-metadata';

import { FindAllCategoriesService } from './FindAllCategoriesService';
import { FakeProductRepositories } from '../repositories/fakes/FakeProductRepositories';

let fakeProductRepositories: FakeProductRepositories;
let findAllCategoriesService: FindAllCategoriesService;

describe('FindAllCategories', () => {
  beforeEach(() => {
    fakeProductRepositories = new FakeProductRepositories();

    findAllCategoriesService = new FindAllCategoriesService(
      fakeProductRepositories,
    );
  });

  it('must search all categories.', async () => {
    const product = await fakeProductRepositories.create({
      name: 'bola de basquete',
      category: 'Esportes',
      price: 13.3,
      value: 8,
    });

    const response = await findAllCategoriesService.execute();

    expect(response).toEqual([
      {
        id: product.category_id,
        category: 'Esportes',
        created_at: product.created_at,
        updated_at: product.updated_at,
      },
    ]);
  });
});
