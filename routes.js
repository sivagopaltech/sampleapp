module.exports = function(app, dbs) {
 
    app.get('/', function(req, res) {
        var db = dbs.connection.db('sweeps');
        db.collection('sweep_user_entries').find().toArray(function (err, docs) {
            if (err) {
              console.log(err);
            } 
          });
        res.sendFile(__dirname+"/public/index.html");
    });
   
   
    return app;
  };