import 'reflect-metadata';

import { FakeProductRepositories } from '../repositories/fakes/FakeProductRepositories';
import { FakeMulterStorageProvider } from '@shared/container/providers/MulterStorageProvider/fakes/FakeMulterStorageProvider';

import { CreateProductService } from './CreateProductService';
import { UpdateAvatarProductService } from './UpdateAvatarProductService';

import { AppErrors } from '@shared/errors/AppErrors';

let fakeProductRepositories: FakeProductRepositories;
let fakeMulterStorageProvider: FakeMulterStorageProvider;

let createProductService: CreateProductService;
let updateAvatarProductService: UpdateAvatarProductService;

describe('UpdateAvatarProduct', () => {
  beforeEach(() => {
    fakeProductRepositories = new FakeProductRepositories();
    fakeMulterStorageProvider = new FakeMulterStorageProvider();

    createProductService = new CreateProductService(fakeProductRepositories);
    updateAvatarProductService = new UpdateAvatarProductService(
      fakeProductRepositories,
      fakeMulterStorageProvider,
    );
  });

  it('should be able to create a avatar to product.', async () => {
    const product = await createProductService.execute({
      name: 'Bola',
      category: 'Esportes',
      price: 13.3,
      value: 8,
    });

    await updateAvatarProductService.execute({
      id: product.id,
      avatarFileName: 'avatar.png',
    });

    expect(product.avatar).toBe('avatar.png');
  });

  it('not should be able to create a avatar to product.', async () => {
    await expect(
      updateAvatarProductService.execute({
        id: 'non-existing-product',
        avatarFileName: 'da',
      }),
    ).rejects.toBeInstanceOf(AppErrors);
  });

  it('should delete old avatar when updating new one', async () => {
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

    await updateAvatarProductService.execute({
      id: product.id,
      avatarFileName: 'avatar2.png',
    });

    expect(deleteFile).toHaveBeenCalledWith('avatar.png');
    expect(product.avatar).toBe('avatar2.png');
  });
});
