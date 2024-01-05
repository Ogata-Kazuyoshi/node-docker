const express = require('express');
const app = express();
const PORT = process.env.PORT || 4242;
require('dotenv').config();

app.get('/api/v1/images', (req, res) => {
  console.log(`server is ${PORT}port`);
  res.send('Hello-NodeJS');
});

app.listen(PORT, () => {
  console.log(`server is runnig : port is ${PORT}`);
});
