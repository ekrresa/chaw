import data from '../utils/orderData';
import Order from '../models/order.model';

const orderService = {
  getOrders() {
    const orders = data.orders.map(order => {
      const newOrder = new Order();
      newOrder.id = order.id;
      newOrder.status = order.status;
      newOrder.number_of_meals = order.number_of_meals;
      newOrder.shipping_cost = order.shipping_cost;
      newOrder.total = order.total;
      newOrder.user_id = order.user_id;
      newOrder.meal_id = order.meal_id;
      newOrder.caterer_id = order.caterer_id;
      return newOrder;
    });
    return orders;
  },

  createOrder(order) {
    const newId = data.orders.length + 1;
    const newOrder = order;
    newOrder.id = newId;
    data.orders.push(newOrder);
    return newOrder;
  },

  getSingleOrder(id) {
    const index = parseInt(id, 10);
    const singleOrder = data.orders.find(order => order.id === index);
    return singleOrder;
  },

  editOrder(id, update) {
    const order = this.getSingleOrder(id);
    const index = data.meals.indexOf(order);

    data.orders[index].status = update.status || order.status;
    data.orders[index].number_of_meals =
      update.number_of_meals || order.number_of_meals;
    data.orders[index].shipping_cost =
      update.shipping_cost || order.shipping_cost;
    data.orders[index].total = update.total || order.total;
    data.orders[index].status = update.status || order.status;
  }
};

export default orderService;
