const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('Ola, seja bem-vindo(a) a minha pagina!')
});

app.listen(3000, () => {
  console.log('server started');
});
