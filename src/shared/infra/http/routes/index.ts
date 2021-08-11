import { Router } from 'express';

import CreateRoutes from '@modules/product/infra/http/routes/Create.routes';
import ListAllProduct from '@modules/product/infra/http/routes/ListAllProduct.routes';
import ListAllCategories from '@modules/product/infra/http/routes/ListAllCategories.routes';

const router = Router();

router.use('/create', CreateRoutes);
router.use('/list', ListAllProduct);
router.use('/categories', ListAllCategories);

export default router;
