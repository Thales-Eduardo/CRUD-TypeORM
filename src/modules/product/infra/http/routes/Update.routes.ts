import { Router } from 'express';

import { ProductController } from '../controllers/ProductController';

const updateRoutes = Router();

const productController = new ProductController();

updateRoutes.put('/:id', productController.update);

export default updateRoutes;
