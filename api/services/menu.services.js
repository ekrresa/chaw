import Menu from '../models/menu.model';
import data from '../utils/menuData';

const menuService = {
  getMenu() {
    const menu = data.menu.map(meals => {
      const newMenu = new Menu();
      newMenu.id = meals.id;
      newMenu.meal_id = meals.meal_id;
      newMenu.caterer_id = meals.caterer_id;

      return newMenu;
    });
    return menu;
  },

  addMenu(menu) {
    const newId = data.menu.length + 1;
    const newMenu = menu;
    newMenu.id = newId;
    data.menu.push(newMenu);
    return menu;
  },

  editMenu(id, update) {
    let index = parseInt(id, 10);
    const menu = data.menu.find(meal => meal.id === index);

    index = data.menu.indexOf(menu);

    data.menu[index].meal_id = update.meal_id || menu.meal_id;
    return data.menu[index];
  }
};

export default menuService;
