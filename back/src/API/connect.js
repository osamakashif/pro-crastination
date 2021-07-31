const cors = require('cors')
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

app.use(cors());
app.use(bodyParser.json())

app.get('/', (req, res) => {
  res.send('Hello World!')
})

//Searches for login in db
app.post('/login', (req, res) => {
  db.collection('Users').findOne(req.body, function (err, result) {
    if (err) {
      res.status(500);
      res.sendStatus(res.statusCode);
    } else
      if (result == undefined){
        res.status(401)
        res.sendStatus(res.statusCode)
        console.log(res.statusCode)
      } else {
        res.status(200)
        res.sendStatus(res.statusCode)
        console.log(res.statusCode)
      }
  });
})

//Adds login credentials to db
app.post('/signup', (req, res) => {
  db.collection('Users').findOne(req.body, function (err, result) {
    if (err){
      res.status(500);
      res.sendStatus(res.statusCode);
    } else
      if (result == undefined){
        db.collection('Users').insert(req.body, function (err, result) {
          if (err) {
            res.status(400)
            res.sendStatus(res.statusCode)
            console.log(res.statusCode)
          } else
            res.status(200)
            res.sendStatus(res.statusCode)
            console.log(res.statusCode)
        });
      } else {
        res.status(409).end("User already exists, please log in instead!")
        console.log(res.statusCode)
      }
  });
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})