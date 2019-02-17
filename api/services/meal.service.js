import data from '../utils/data';
import Meal from '../models/meal.model';

const mealService = {
  getAllMeals() {
    const meals = data.meals.map(meal => {
      const newMeal = new Meal();
      newMeal.id = meal.id;
      newMeal.name = meal.name;
      newMeal.description = meal.description;
      newMeal.size = meal.size;
      newMeal.price = meal.price;
      newMeal.caterer_id = 23;
      return newMeal;
    });
    return meals;
  },

  createMeal(meal) {
    const newId = data.meals.length;
    meal.id = newId;
    data.meals.push(meal);
    return meal;
  },

  getOneMeal(id) {
    const meal = data.meals.find(food => food.id === id);
    return meal || {};
  },

  updateMeal(id, update) {
    const meal = this.getOneMeal(id);
    const index = data.meals.indexOf(meal);
    data.meals[index].name = update.name || meal.name;
    data.meals[index].size = update.size || meal.size;
    data.meals[index].description = update.description || meal.description;
    data.meals[index].price = update.price || meal.price;
    return data.meals[index];
  },

  deleteMeal(id) {
    const meal = this.getOneMeal(id);
    const newMeals = data.meals.filter(meal => {
      return meal.id !== id;
    });
    data.meals = newMeals;
    return meal;
  }
};

export default mealService;
