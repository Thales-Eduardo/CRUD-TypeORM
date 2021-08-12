import { Router } from 'express';

import { ProductController } from '../controllers/ProductController';

const DeleteProductRoutes = Router();

const productController = new ProductController();

DeleteProductRoutes.delete('/:id', productController.delete);

export default DeleteProductRoutes;
