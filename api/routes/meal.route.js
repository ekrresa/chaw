import { Router } from 'express';
import mealController from '../controllers/meal.controller';

const router = Router();

router.get('/', mealController.getMeals);
router.get('/:id', mealController.getSingleMeal);
router.post('/', mealController.addAMeal);
router.put('/:id', mealController.updateMeal);
router.delete('/:id', mealController.deleteMeal);

export default router;
