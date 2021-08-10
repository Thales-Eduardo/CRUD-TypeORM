import { Router } from 'express';

import CreateRoutes from '@modules/product/infra/http/routes/Create.routes';

const router = Router();

router.use('/create', CreateRoutes);

export default router;
