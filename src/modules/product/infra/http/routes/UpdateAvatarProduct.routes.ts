import { Router } from 'express';
import multer from 'multer';
import { celebrate, Segments, Joi } from 'celebrate';

import uploadConfig from '@config/upload';

import { AvatarProductController } from '../controllers/AvatarProductController';

const upload = multer(uploadConfig);
const updateAvatar = Router();

const avatarProduct = new AvatarProductController();

updateAvatar.patch(
  '/:id',
  upload.single('avatar'),
  celebrate({
    [Segments.PARAMS]: {
      id: Joi.string().uuid().required(),
    },
  }),
  avatarProduct.update,
);

export default updateAvatar;
