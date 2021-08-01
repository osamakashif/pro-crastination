const cors = require('cors')
const express = require('express')
const MongoClient = require('mongodb').MongoClient;
const app = express()
const bcrypt = require("bcryptjs")
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
  db.collection('Users').findOne({"username": req.body["username"]}, function (err, result) {
    if (err) {
      res.status(500);
      res.sendStatus(res.statusCode);
    } else
      if (result == undefined){
        res.status(401)
        res.sendStatus(res.statusCode)
        console.log(res.statusCode)
      } else {

        //Comparing attempted passwords to hashed passwords
        bcrypt.compare(req.body["password"], result["password"], function(error, isMatch) {
          if (error) {
            throw error
          } else if (!isMatch) {
            console.log("Password doesn't match!")
            res.status(401)
            res.sendStatus(res.statusCode)
            console.log(res.statusCode)
          } else {
            console.log("Password matches!")
            res.status(200)
            res.sendStatus(res.statusCode)
            console.log(res.statusCode)
          }
        })
      }
  });
})

//Adds login credentials to db
app.post('/signup', (req, res) => {
  db.collection('Users').findOne({"username": req.body["username"]}, function (err, result) {
    if (err){
      res.status(500);
      res.sendStatus(res.statusCode);
    } else{
        if (result == undefined){
          bcrypt.genSalt(10, function (saltError, salt) {
            if (saltError) {
              throw saltError
            } else {

              //Encrypting password before storing it in db
              bcrypt.hash(req.body["password"], salt, function(hashError, hash) {
                if (hashError) {
                  throw hashError
                } else {
                  console.log(req.body["password"])
                  console.log(hash)
                  req.body["password"] = hash
                  db.collection('Users').insert({"username": req.body["username"],"password" :  req.body["password"], "list": []}, function (err, result) {
                    if (err) {
                      res.status(400)
                      res.sendStatus(res.statusCode)
                      console.log(res.statusCode)
                    } else
                      res.status(200)
                      res.sendStatus(res.statusCode)
                      console.log(res.statusCode)
                  });
                }
              })
            }
          })
      } else {
        res.status(409).end("User already exists, please log in instead!")
        console.log(res.statusCode)
      }
    }
  });
})

//This API changes the list for the user specified in the request
app.post('/changelist', (req, res) => {
  console.log(req.body["list"])
  db.collection('Users').updateOne({"username": req.body["username"]}, {$set: {"list": req.body["list"]}})
  res.sendStatus(200)
})

//This API responds with the list that is stored for the user specified in the request
app.post('/list', (req, res) => {
  db.collection('Users').findOne({"username": req.body["username"]}, function (err, result) {
    res.status(200)
    res.send(result["list"])
  });
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})