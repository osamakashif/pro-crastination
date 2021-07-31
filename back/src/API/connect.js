const express = require('express')
const MongoClient = require('mongodb').MongoClient;
const app = express()
const port = 4000
var bodyParser = require('body-parser')
var db;

//Establish Connection with database
MongoClient.connect('mongodb://localhost:27017/ProcraStation', function (err, database) {
   if (err) 
   	  throw err
   else
   {
      db = database.db('ProcraStation');
      console.log('Connected to MongoDB');
   }
 });

app.use(bodyParser.json())

app.get('/', (req, res) => {
  res.send('Hello World!')
})

//Searches for login in db
app.post('/login', (req, res) => {
  db.collection('Users').findOne(req.body, function (err, result) {
    if (err)
      res.send('Error');
    else
      if (result == undefined){
        res.send("User not found, please sign up")
      } else {
        res.send("login successful")
      }
  });
})

//Adds login credentials to db
app.post('/signup', (req, res) => {
  db.collection('Users').findOne(req.body, function (err, result) {
    if (err)
      res.send('Error');
    else
      if (result == undefined){
        db.collection('Users').insert(req.body, function (err, result) {
          if (err)
            res.send('Error');
          else
            res.send('Registration Successful');
        });
      } else {
        res.send("User already exists")
      }
  });
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})