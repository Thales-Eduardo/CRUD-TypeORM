import { Router } from 'express';
import { celebrate, Segments, Joi } from 'celebrate';

import { ProductController } from '../controllers/ProductController';

const ListAllProductRoutes = Router();

const productController = new ProductController();

ListAllProductRoutes.get(
  '/:id',
  celebrate({
    [Segments.PARAMS]: {
      id: Joi.string().uuid().required(),
    },
  }),
  productController.index,
);

export default ListAllProductRoutes;
