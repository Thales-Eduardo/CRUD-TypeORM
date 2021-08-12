import { Router } from 'express';
import multer from 'multer';

import uploadConfig from '@config/upload';

import { AvatarProductController } from '../controllers/AvatarProductController';

const upload = multer(uploadConfig);
const updateAvatar = Router();

const avatarProduct = new AvatarProductController();

updateAvatar.patch('/:id', upload.single('avatar'), avatarProduct.update);

export default updateAvatar;
