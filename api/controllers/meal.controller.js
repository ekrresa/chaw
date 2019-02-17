import mealService from '../services/meal.services';

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

    const meal = mealService.getOneMeal(id);

    if (!meal) {
      return res
        .status(404)
        .send({ status: 'error', message: 'meal does not exist' });
    }

    return res
      .json({
        status: 'success',
        data: meal
      })
      .status(200);
  },

  addAMeal(req, res) {
    if (Object.keys(req.body).length < 5) {
      return res.status(400).send({ error: 'All fields are required' });
    }

    const newMeal = req.body;
    const createdMeal = mealService.createMeal(newMeal);
    return res
      .json({
        status: 'success',
        data: createdMeal
      })
      .status(201);
  },

  updateMeal(req, res) {
    const { id } = req.params;
    const meal = mealService.getOneMeal(id);

    if (!meal) {
      return res
        .status(404)
        .send({ status: 'error', message: 'meal not found' });
    }
    const updatedMeal = mealService.updateMeal(id, req.body);
    return res
      .json({
        status: 'success',
        data: updatedMeal
      })
      .status(201);
  },

  deleteMeal(req, res) {
    const { id } = req.params;
    const meal = mealService.getOneMeal(id);

    if (!meal) {
      return res
        .status(404)
        .send({ status: 'error', message: 'meal does not exist' });
    }
    const removedMeal = mealService.deleteMeal(id);
    return res
      .json({
        status: 'success',
        data: removedMeal
      })
      .status(204);
  }
};

export default mealController;
