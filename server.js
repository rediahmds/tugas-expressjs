require('dotenv').config();
const express = require('express');
const { isEmpty } = require('./lib');

const app = express();
const port = process.env.PORT || 9000;
const defaultBiodata = {
  nama: 'Redi Ahmad',
  domisili: 'Tangerang, Banten',
};

app.listen(port, () => console.log(`Server running on port: ${port}`));

app.use(express.json());

app.get('/', (req, res) => {
  res.send('<h1>This shall be an important endpoint</h1>');
});

// /biodata endpoint
// This covers minimum requirement for the assignment
app.get('/biodata', (req, res) => {
  // if no query, response with default biodata
  if (isEmpty(req.query)) {
    res.send(defaultBiodata);
  }

  const { name, alamat } = req.query;
  const queryResult = {
    name,
    alamat,
    'tempat-lahir': req.query['tempat-lahir'],
    'tanggal-lahir': req.query['tanggal-lahir'],
  };
  res.send(queryResult);
});
