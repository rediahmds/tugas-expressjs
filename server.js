require('dotenv').config();
const express = require('express');
const { isEmpty } = require('./src/lib');
const biodata = require('./src/biodata');

const app = express();
const port = process.env.PORT || 9000;

app.listen(port, () => console.log(`Server running on port: ${port}`));

app.use(express.json()); // enables to send data in JSON format
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send('<h1>This shall be an important endpoint</h1>');
});

// /biodata endpoint
// This covers minimum requirement for the assignment
app.get('/biodata', (req, res) => {
  // if no query, response with default biodata
  if (isEmpty(req.query)) {
    res.send(biodata);
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

app.post('/biodata', (req, res) => {
  const dataSentByClient = req.body;
  const biodataInitialLength = biodata.length;
  biodata.push(dataSentByClient);
  const biodataNewLength = biodata.length;

  // Send post request result
  res.send({
    data: dataSentByClient,
    result:
      biodataInitialLength !== biodataNewLength
        ? 'Successfully send the data :D'
        : 'Failed to send the data :(',
  });
});
