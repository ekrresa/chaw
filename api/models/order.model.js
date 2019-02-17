class Order {
  constructor() {
    this.id = null;
    this.status = 'confirmed' || 'delivered';
    this.number_of_meals = null;
    this.shipping_cost = null;
    this.total = null;
    this.user_id = null;
    this.meal_id = [];
    this.caterer_id = null;
  }
}

export default Order;