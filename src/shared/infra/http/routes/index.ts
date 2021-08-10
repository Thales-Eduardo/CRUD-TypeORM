import { Router } from 'express';

import CreateRoutes from '@modules/product/infra/http/routes/Create.routes';
import ListAllProduct from '@modules/product/infra/http/routes/ListAllProduct.routes';

const router = Router();

router.use('/create', CreateRoutes);
router.use('/list', ListAllProduct);

export default router;
