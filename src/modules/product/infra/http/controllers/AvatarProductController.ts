import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { classToClass } from 'class-transformer';

import { UpdateAvatarProductService } from '@modules/product/services/UpdateAvatarProductService';

interface MulterRequest extends Request {
  file: any;
}

export class AvatarProductController {
  public async update(req: Request, res: Response) {
    const { id } = req.params;
    const updateAvatarProduct = container.resolve(UpdateAvatarProductService);

    const avatar = await updateAvatarProduct.execute({
      id,
      avatarFileName: (req as MulterRequest).file.filename,
    });

    return res.status(200).json(classToClass(avatar));
  }
}
