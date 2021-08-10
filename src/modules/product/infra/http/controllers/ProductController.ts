import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { CreateProductService } from '@modules/product/services/CreateProductService';

export class ProductController {
  public async index(req: Request, res: Response) {}

  public async create(req: Request, res: Response) {
    const { name, category, price, value } = req.body;

    const createProduct = container.resolve(CreateProductService);

    const product = await createProduct.execute({
      name,
      category,
      price,
      value,
    });

    return res.json(product);
  }

  public async update(req: Request, res: Response) {}

  public async delete(req: Request, res: Response) {}
}
