var express = require('express');
var app = express();
 
var initializeDatabases = require('./dbs');
var routes = require('./routes');
 
initializeDatabases(function(err, dbs) {
  if (err) {
    console.error('Failed to make all database connections!');
    console.error(err);
    process.exit(1);
  }
 
  // Initialize the application once database connections are ready.
  routes(app, dbs);
 
  app.listen(8000, function() {
    console.log('Listening on port 8000');
  });
});