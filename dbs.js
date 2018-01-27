var async = require('async');
var MongoClient = require('mongodb').MongoClient;
 
// Note: A production application should not expose database credentials in plain text.
// For strategies on handling credentials, visit 12factor: https://12factor.net/config.
var DEV_URI = "mongodb://sivagopaltech:mongodb512@cluster0-shard-00-00-k4jvt.mongodb.net:27017,cluster0-shard-00-01-k4jvt.mongodb.net:27017,cluster0-shard-00-02-k4jvt.mongodb.net:27017?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin";
var MKTG_URI = "mongodb://sivagopaltech:mongodb512@cluster0-shard-00-00-k4jvt.mongodb.net:27017,cluster0-shard-00-01-k4jvt.mongodb.net:27017,cluster0-shard-00-02-k4jvt.mongodb.net:27017?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin";
 
var databases = {
  connection: async.apply(MongoClient.connect, DEV_URI),
};
 
module.exports = function (cb) {
  async.parallel(databases, cb);
};