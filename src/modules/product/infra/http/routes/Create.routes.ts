import { Router } from 'express';

import { ProductController } from '../controllers/ProductController';

const CreateRouter = Router();

const productController = new ProductController();

CreateRouter.post('/', productController.create);

export default CreateRouter;
