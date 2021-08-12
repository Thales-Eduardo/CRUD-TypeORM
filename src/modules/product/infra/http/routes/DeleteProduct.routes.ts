import { Router } from 'express';
import { celebrate, Segments, Joi } from 'celebrate';

import { ProductController } from '../controllers/ProductController';

const DeleteProductRoutes = Router();

const productController = new ProductController();

DeleteProductRoutes.delete(
  '/:id',
  celebrate({
    [Segments.PARAMS]: {
      id: Joi.string().uuid().required(),
    },
  }),
  productController.delete,
);

export default DeleteProductRoutes;
