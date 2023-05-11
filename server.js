require('dotenv').config();
const express = require('express');

const app = express();
const port = process.env.PORT || 9000;

app.listen(port, () => console.log(`Server running on port: ${port}`));

app.get('/', (req, res) => {
  res.send('<h1>This shall be an important endpoint</h1>');
});
