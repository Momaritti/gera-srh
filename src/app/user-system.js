var PouchDB = require('pouchdb');
PouchDB.plugin(require('pouchdb-authentication'));
var db = new PouchDB('http://localhost:3333/db', {skip_setup: true});
var local = new PouchDB('local_db');
local.sync(db, {live: true, retry: true}).on('error', console.log.bin(console));

