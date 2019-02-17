class Order {
  constructor() {
    this.id = null;
    this.status = 'confirmed' || 'delivered' || 'cancelled';
    this.number_of_meals = null;
    this.shipping_cost = null;
    this.total = null;
    this.user_id = null;
    this.address_id = null;
    this.meal_id = [];
    this.caterer_id = null;
    this.createdAt = new Date();
    this.updatedAt = new Date();
  }
}

export default Order;
