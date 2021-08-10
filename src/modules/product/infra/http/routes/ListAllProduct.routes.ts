import { Router } from 'express';

import { ProductController } from '../controllers/ProductController';

const ListAllProductRoutes = Router();

const productController = new ProductController();

ListAllProductRoutes.get('/:id', productController.index);

export default ListAllProductRoutes;
