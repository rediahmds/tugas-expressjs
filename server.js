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
  res.send(`<h1>This shall be an important endpoint</h1>
  <span> Try to visit <code>/biodata</code> endpoint and do some query or POST request</span>`);
});

// /biodata endpoint
// This covers minimum requirement for the assignment
app.get('/biodata', (req, res) => {
  // if no query, response with all biodata
  if (isEmpty(req.query)) return res.send(biodata);

  // Logic for alkademi assignment
  const alkademiQuery =
    req.query.name &&
    req.query.alamat &&
    req.query['tempat-lahir'] &&
    req.query['tanggal-lahir'];

  if (alkademiQuery) {
    const alkademiQueryObj = req.query;
    biodata.push(alkademiQueryObj); // this query also add new data
    return res.send(alkademiQueryObj);
  }

  const queryResult = biodata.filter(personBiodata => {
    for (const queryKey in req.query) {
      if (Object.hasOwn(personBiodata, queryKey)) {
        if (personBiodata[queryKey] === req.query[queryKey]) {
          return personBiodata;
        } else continue;
      }
    }
  });

  if (!queryResult && !isEmpty(req.query))
    return res.status(404).send(`Ooops! No results matched with your query`);
  return res.send({
    query: req.query,
    result: queryResult,
  });
});

app.post('/biodata', (req, res) => {
  const { nama, alamat, tempat_lahir, tanggal_lahir } = req.body;

  // Send post request result

  // failed to post the request body
  const validatePostBody =
    nama === '' || !nama || !alamat || !tempat_lahir || !tanggal_lahir;
  if (validatePostBody) {
    res.status(400).send({
      data: req.body,
      result: 'Failed to send the data :( Have you check the properties?',
    });
  } else {
    // successfully post the data
    biodata.push(req.body);
    res.status(201).send({
      data: req.body,
      result: 'Successfully send the data :D',
    });
  }
});
