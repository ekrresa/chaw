import { Router } from 'express';
import menuController from '../controllers/menu.controller';

const router = Router();

router.get('/', menuController.getMenu);
router.post('/', menuController.newMenu);
router.put('/:id', menuController.updateMenu);

export default router;
