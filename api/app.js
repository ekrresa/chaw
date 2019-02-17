import express from 'express';

import mealRoutes from './routes/meal.route';
import orderRoutes from './routes/order.routes';

const app = express();

// Parse request body
app.use(express.json());
const PORT = 3000;

app.get('/', (req, res) => {
  return res.send('Get to the chopper! NOW!!!');
});

app.use('/api/v1/meals', mealRoutes);
app.use('/api/v1/orders', orderRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on PORT ${PORT}`);
});
