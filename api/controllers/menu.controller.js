import menuService from '../services/menu.services';

const menuController = {
  getMenu(req, res) {
    const menu = menuService.getMenu();
    return res
      .json({
        status: 'success',
        data: menu
      })
      .status(200);
  },

  newMenu(req, res) {
    if (Object.keys(req.body).length < 2) {
      return res.status(400).send({ error: 'All fields are required' });
    }
    const createdMenu = menuService.addMenu(req.body);
    return res
      .json({
        status: 'success',
        data: createdMenu
      })
      .status(201);
  },

  updateMenu(req, res) {
    const { id } = req.params;
    const menu = menuService.editMenu(id, req.body);

    if (!menu) {
      return res
        .status(404)
        .send({ status: 'error', message: 'meal not found' });
    }

    return res
      .json({
        status: 'success',
        data: menu
      })
      .status(201);
  }
};

export default menuController;
