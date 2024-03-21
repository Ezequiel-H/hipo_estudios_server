const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.post('/', (req, res) => {
  console.log(req.body);

  // res.send({
  //   transaction: 'error',
  // });

  res.send({
    token: 'aaaaaa',
    usuario: {
      nombre: 'carlos', apellido: 'perez', prefijo: 'aa', intereses: 'hhaa',
    },
  });
});

app.get('/health', (req, res) => {
  res.send('OK');
});

app.get('/healthz', (req, res) => {
  res.send('OK');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
