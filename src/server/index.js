import fs from 'fs';
import express from 'express';

const app = express();

app.use(express.static('public'));

app.get('/', (req, res) => {
  fs.readFile('build/template/index.html', 'utf8', (err, data) => {
    if (err) {
      console.log(err);
    }

    res.send(data);
  });
});

app.listen(3000, () => {
  console.log('Server is listening on http://127.0.0.1:3000');
});
