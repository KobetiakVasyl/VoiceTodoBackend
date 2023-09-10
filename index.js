const express = require('express');
const helmet = require('helmet');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

const {ORIGIN = '', PORT = 3000} = process.env;

app.use(helmet());
app.use(cors({
  origin: ORIGIN,
  exposedHeaders: ['Content-Disposition'],
  methods: ['GET', 'POST', 'PUT', 'DELETE']
}));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.listen(PORT, () => {
  console.log('LISTENING FOR PORT: ', PORT);
})