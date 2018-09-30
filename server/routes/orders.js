import express from 'express';

import orderControllers from '../controller/orderControllers';

const router = express.Router();

// orders route
router.get('/', orderControllers.testConnections);
router.post('/orders', orderControllers.postOrders);
router.get('/orders', orderControllers.getAllOrders);
router.get('/orders/:id', orderControllers.getSpecificOrders);
router.put('/orders/:id', orderControllers.updateOrderStatus);


module.exports = router;
