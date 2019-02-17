import mealService from '../services/meal.service';

const mealController = {
  getMeals(req, res) {
    const allMeals = mealService.getAllMeals();
    return res
      .json({
        status: 'success',
        data: allMeals
      })
      .status(200);
  },

  getSingleMeal(req, res) {
    const { id } = req.params;
    const meal = mealService.getAMeal(id);
    return res
      .json({
        status: 'success',
        data: meal
      })
      .status(200);
  }
};
