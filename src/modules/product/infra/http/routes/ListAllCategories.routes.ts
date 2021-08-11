import { Router } from 'express';

import { CategoryController } from '../controllers/CategoryController';

const ListAllCategoriesRoutes = Router();

const categoryController = new CategoryController();

ListAllCategoriesRoutes.get('/', categoryController.index);

export default ListAllCategoriesRoutes;
