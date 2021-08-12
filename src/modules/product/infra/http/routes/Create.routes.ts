import { Router } from 'express';
import { celebrate, Segments, Joi } from 'celebrate';

import { ProductController } from '../controllers/ProductController';

const CreateRouter = Router();

const productController = new ProductController();

CreateRouter.post(
  '/',
  celebrate({
    [Segments.BODY]: {
      name: Joi.string().required(),
      category: Joi.string().required(),
      price: Joi.number().required(),
      value: Joi.number().required(),
    },
  }),
  productController.create,
);

export default CreateRouter;
