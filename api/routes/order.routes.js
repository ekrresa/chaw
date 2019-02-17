import { Router } from 'express';
import orderController from '../controllers/order.controller';

const router = Router();

router.get('/', orderController.getOrders);
router.get('/:id', orderController.getSingleOrder);
router.post('/', orderController.createOrder);
router.put('/:id', orderController.updateOrder);

export default router;
