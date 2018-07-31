const express = require('express');

const bodyParser = require('body-parser');
const path = require('path');
const morgan = require('morgan');
const helmet = require('helmet');

const router = require('./router');
// const seed = require('../database/seed');

const app = express();
const port = 3004;

app.use(morgan('combined'));
app.use(helmet());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, '../client/dist/')));

app.use('/api', router);

app.listen(port, () => console.log(`Listening on port ${port}...`));