import orderService from '../services/order.services';

const orderController = {
  getOrders(req, res) {
    const orders = orderService.getOrders();
    return res
      .json({
        status: 'success',
        data: orders
      })
      .status(200);
  },

  getSingleOrder(req, res) {
    const { id } = req.params;
    const order = orderService.getSingleOrder(id);

    if (!order) {
      return res
        .status(404)
        .send({ status: 'error', message: 'order does not exist' });
    }

    return res
      .json({
        status: 'success',
        data: order
      })
      .status(200);
  },

  createOrder(req, res) {
    if (Object.keys(req.body).length < 8) {
      return res.status(400).send({ error: 'All fields are required' });
    }

    const newOrder = req.body;
    const createdOrder = orderService.createOrder(newOrder);
    return res
      .json({
        status: 'success',
        data: createdOrder
      })
      .status(201);
  },

  updateOrder(req, res) {
    const { id } = req.params;
    const order = orderService.getSingleOrder(id);

    if (!order) {
      return res
        .status(404)
        .send({ status: 'error', message: 'meal not found' });
    }
    const updatedOrder = orderService.editOrder(id, req.body);
    return res
      .json({
        status: 'success',
        data: updatedOrder
      })
      .status(201);
  }
};

export default orderController;
