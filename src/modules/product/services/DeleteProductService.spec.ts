import 'reflect-metadata';

import { FakeProductRepositories } from '../repositories/fakes/FakeProductRepositories';
import { FakeMulterStorageProvider } from '@shared/container/providers/MulterStorageProvider/fakes/FakeMulterStorageProvider';
import { FakeCacheProvider } from '@shared/container/providers/CacheProvider/fakes/FakeCacheProvider';

import { CreateProductService } from './CreateProductService';
import { DeleteProductService } from './DeleteProductService';
import { UpdateAvatarProductService } from './UpdateAvatarProductService';

import { AppErrors } from '@shared/errors/AppErrors';

let fakeProductRepositories: FakeProductRepositories;
let fakeMulterStorageProvider: FakeMulterStorageProvider;
let fakeCacheProvider: FakeCacheProvider;

let createProductService: CreateProductService;
let deleteProductService: DeleteProductService;
let updateAvatarProductService: UpdateAvatarProductService;

describe('DeleteProduct', () => {
  beforeEach(() => {
    fakeProductRepositories = new FakeProductRepositories();
    fakeMulterStorageProvider = new FakeMulterStorageProvider();
    fakeCacheProvider = new FakeCacheProvider();

    deleteProductService = new DeleteProductService(
      fakeProductRepositories,
      fakeMulterStorageProvider,
      fakeCacheProvider,
    );
    createProductService = new CreateProductService(
      fakeProductRepositories,
      fakeCacheProvider,
    );
    updateAvatarProductService = new UpdateAvatarProductService(
      fakeProductRepositories,
      fakeMulterStorageProvider,
      fakeCacheProvider,
    );
  });

  it('should be able to delete a product.', async () => {
    const deleteFile = jest.spyOn(fakeMulterStorageProvider, 'deleteFile');

    const product = await fakeProductRepositories.create({
      name: 'Bola',
      category: 'Esportes',
      price: 13.3,
      value: 8,
    });

    await updateAvatarProductService.execute({
      id: product.id,
      avatarFileName: 'avatar.png',
    });

    const response = await deleteProductService.execute({ id: product.id });

    expect(deleteFile).toHaveBeenCalledWith('avatar.png');
    expect(response).toBe(undefined);
  });

  it('not should be able to delete a product.', async () => {
    await expect(
      deleteProductService.execute({ id: 'non-existing-product' }),
    ).rejects.toBeInstanceOf(AppErrors);
  });
});
