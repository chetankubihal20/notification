const express = require('express');
const bodyParser= require('body-parser');
const cors= require('cors');

const app = express();

const router = require('./src/routes/router');

app.use(cors())
app.use(bodyParser.urlencoded({extended : false}));
app.use(bodyParser.json())
app.use('/university',router);

module.exports = app;