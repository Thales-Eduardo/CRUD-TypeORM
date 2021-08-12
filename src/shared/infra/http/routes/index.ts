import { Router } from 'express';

import CreateRoutes from '@modules/product/infra/http/routes/Create.routes';
import ListAllProduct from '@modules/product/infra/http/routes/ListAllProduct.routes';
import ListAllCategories from '@modules/product/infra/http/routes/ListAllCategories.routes';
import UpdateRoutes from '@modules/product/infra/http/routes/Update.routes';
import DeleteProductRoutes from '@modules/product/infra/http/routes/DeleteProduct.routes';

const router = Router();

router.use('/create', CreateRoutes);
router.use('/list', ListAllProduct);
router.use('/categories', ListAllCategories);
router.use('/update', UpdateRoutes);
router.use('/delete', DeleteProductRoutes);

export default router;
