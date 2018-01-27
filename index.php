<?php
$client = new MongoDB\Driver\Manager("mongodb://sivagopaltech:mongodb512@cluster0-shard-00-00-k4jvt.mongodb.net:27017,cluster0-shard-00-01-k4jvt.mongodb.net:27017,cluster0-shard-00-02-k4jvt.mongodb.net:27017?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin");
//  var_dump($client);
$filter = ['email' => 'siva@votigo.com'];


$query = new MongoDB\Driver\Query($filter);
$cursor = $client->executeQuery('sweeps.sweep_user_entries', $query);

?>
<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="description" content="">
    <meta name="author" content="">

    <title>Signin Template for Bootstrap</title>

    <!-- Bootstrap core CSS -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">

  </head>

  <body class="text-center">
      <div class="container">
          <div class="row justify-content-center">
                <div class="col-md-3">
                        <form class="form-signin" action="/" method="POST">
                            <h1 class="h3 mb-3 font-weight-normal">Sweep</h1>
                            <label for="inputEmail" class="sr-only">Email address</label>
                            <input type="email" id="inputEmail" name='email' class="form-control" placeholder="Email address" required autofocus>
                            <p></p>
                            <button class="btn btn-lg btn-primary btn-block" type="submit">Submit</button>
                            <p class="mt-5 mb-3 text-muted">&copy; 2017-2018</p>
                        </form>
                </div>
          </div>
      </div>
    
  </body>
</html>