const express = require("express");
const hbs = require("hbs");
const bodyParser = require("body-parser");
const MongoClient = require("mongodb").MongoClient;

var app = express();

app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

app.get('/', (req, res) => {
    res.sendFile(__dirname+"/public/index.html");
    MongoClient.connect('mongodb://sivagopaltech:mongodb512@cluster0-shard-00-00-k4jvt.mongodb.net:27017,cluster0-shard-00-01-k4jvt.mongodb.net:27017,cluster0-shard-00-02-k4jvt.mongodb.net:27017?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin', (err, dbo) => {
        if(err){
        return console.log("unable to connect ot mongo db ");
        }
        var db = dbo.db("test");
        console.log("connected to mongo db");
        dbo.close();
    });
    
});


app.post('/', (req, res) => {
    console.log(req.body);
    res.sendFile(__dirname+"/public/index.html");
    db.collection("sweep_user_entries").insertOne({
        email: req.body,
    }, (err, result) => {
        if(err) {
            console.log("unable to connect to database", err);
        }
        console.log(JSON.stringify(result.ops,null,2));
    });
});

app.listen(8000);