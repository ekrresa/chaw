export default {
  orders: [
    {
      id: 1,
      status: 'delivered',
      number_of_meals: 3,
      shipping_cost: 1500,
      total: 4500,
      user_id: 3,
      address_id: 2,
      meal_id: [2, 5, 12],
      caterer_id: 23
    },
    {
      id: 2,
      status: 'confirmed',
      number_of_meals: 5,
      shipping_cost: 2000,
      total: 7000,
      user_id: 5,
      address_id: 6,
      meal_id: [2, 5, 3],
      caterer_id: 4
    },
    {
      id: 3,
      status: 'confirmed',
      number_of_meals: 1,
      shipping_cost: 500,
      total: 1200,
      user_id: 5,
      address_id: 2,
      meal_id: [4],
      caterer_id: 9
    },
    {
      id: 3,
      status: 'delivered',
      number_of_meals: 2,
      shipping_cost: 500,
      total: 2000,
      user_id: 5,
      address_id: 3,
      meal_id: [4, 3],
      caterer_id: 12
    }
  ]
};
