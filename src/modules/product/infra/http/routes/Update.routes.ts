import { Router } from 'express';
import { celebrate, Segments, Joi } from 'celebrate';

import { ProductController } from '../controllers/ProductController';

const updateRoutes = Router();

const productController = new ProductController();

updateRoutes.put(
  '/:id',
  celebrate({
    [Segments.PARAMS]: {
      id: Joi.string().uuid().required(),
    },
    [Segments.BODY]: {
      name: Joi.string().required(),
      category: Joi.string().required(),
      price: Joi.number().required(),
      value: Joi.number().required(),
    },
  }),
  productController.update,
);

export default updateRoutes;
