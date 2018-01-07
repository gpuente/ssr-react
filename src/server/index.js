import express from 'express';

const app = express();

app.get('/', (req, res) => {
  res.send({ message: 'ok' });
});

app.listen(3000, () => {
  console.log('Server is listening on http://127.0.0.1:3000');
});
