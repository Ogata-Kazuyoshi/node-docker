const express = require('express');
const app = express();
const PORT = process.env.PORT || 4242;
require('dotenv').config();

app.get('/api/v1/images', (req, res) => {
  console.log(`server is ${PORT}port`);
  console.log('test');
  res.send(
    'Hello-NodeJS-renderにデプロイできました！！！ホットリロードはきいちょるんすか？？今回はいけちょるでしょ！！！'
  );
});

app.listen(PORT, () => {
  console.log(`server is runnig : port is ${PORT}`);
});
