import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { classToClass } from 'class-transformer';

import { CreateProductService } from '@modules/product/services/CreateProductService';
import { FindAllProductService } from '@modules/product/services/FindAllProductService';
import { UpdateProductService } from '@modules/product/services/UpdateProductService';
import { DeleteProductService } from '@modules/product/services/DeleteProductService';

export class ProductController {
  public async index(req: Request, res: Response) {
    const { id } = req.params;

    const findAllProduct = container.resolve(FindAllProductService);

    const allProduct = await findAllProduct.execute({ id });

    return res.json({ product: classToClass(allProduct) });
  }

  public async create(req: Request, res: Response) {
    const { name, category, price, value } = req.body;

    const createProduct = container.resolve(CreateProductService);

    const product = await createProduct.execute({
      name,
      category,
      price,
      value,
    });

    return res.json({ product: classToClass(product) });
  }

  public async update(req: Request, res: Response) {
    const { id } = req.params;
    const { category, name, price, value } = req.body;

    const updateProduct = container.resolve(UpdateProductService);

    const update = await updateProduct.execute({
      id,
      category,
      name,
      price,
      value,
    });

    return res.json({ product: classToClass(update) });
  }

  public async delete(req: Request, res: Response) {
    const { id } = req.params;

    const deleteProduct = container.resolve(DeleteProductService);

    await deleteProduct.execute({ id });

    return res.status(204).send();
  }
}
