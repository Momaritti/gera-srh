var PouchDB = require('pouchdb');
var express = require('express');
var app = express();
var cors = require('cors');

app.use(cors());

app.use('/db', require('express-pouchdb')(PouchDB));

app.listen(3333);
