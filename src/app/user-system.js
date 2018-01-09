var $ = require('../../node_modules/jquery/dist/jquery.min.js');
//var PouchDB = require('../../node_modules/pouchdb');
import PouchDB from 'pouchdb';
PouchDB.plugin(require('pouchdb-authentication'));
var db = new PouchDB('http://localhost:3333/db', {skip_setup: true});
var local = new PouchDB('local_db');
local.sync(db, {live: true, retry: true}).on('error', console.log(console));

// login

function getInput(){
  // grab username and password
  var username = $('#user_in').val();
  var password = $('#password_in').val();
}

function LogIn(){

  // todo
};

// sign up
function SignUp(username, password){
  db.signUp(username, password, function (err, response) {
  if (err) {
    if (err.name === 'conflict') {
      alert('Dieser Nutzer existiert bereits. Bitte wähle einen anderen Namen.');
    } else if (err.name === 'forbidden') { alert('ungültiger Name');
  } else { //more errors}
  }
  }
  if (response[0] === true) {
    alert('Erfolgreich eingeloggt.');
  };
});
}

// onclick
$( 'button' ).bind( 'click', function() {
  alert( 'User clicked the button' );
});
