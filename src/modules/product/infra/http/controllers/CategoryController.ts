import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { classToClass } from 'class-transformer';

import { FindAllCategoriesService } from '@modules/product/services/FindAllCategoriesService';

export class CategoryController {
  public async index(req: Request, res: Response) {
    const findAllCategories = container.resolve(FindAllCategoriesService);

    const allProduct = await findAllCategories.execute();

    return res.json(classToClass(allProduct));
  }
}
