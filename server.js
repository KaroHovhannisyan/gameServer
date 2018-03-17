const express        = require('express');
const MongoClient    = require('mongodb').MongoClient;
const bodyParser     = require('body-parser');
const app            = express();
const port = 8000;
app.use(bodyParser.urlencoded({ extended: true }));
MongoClient.connect("mongodb://gameByUs:gameByUs1995@ds215759.mlab.com:15759/game", (err, database) => {
  if (err) return console.log(err)
  app.listen(port, () => {
    console.log('We are live on ' + port);
  });               
 app.get("/",function(req,res){
  res.send("ok");
 })
})
