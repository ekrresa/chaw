import express from 'express';

const app = express();

// Parse request body
app.use(express.json());
const PORT = 3000;

app.get('/', (req, res) => {
  return res.send('Get to the chopper! NOW!!!');
});

app.listen(PORT, () => {
  console.log(`Server is running on PORT ${PORT}`);
});
