const express = require('express');
const bodyParser= require('body-parser')
const MongoClient = require('mongodb').MongoClient
const app = express();



MongoClient.connect('mongodb+srv://ivan:!Joni1852!@cluster0.vb8as.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',{useUnifiedTopology:true}).then(client => {
    console.log("Connected to Database")
    const db = client.db("login-auth")
    const loginData=db.collection('loginData')

    app.use(bodyParser.urlencoded({ extended: true }))
    app.get('/',(req,res) => {res.sendFile(__dirname + '/login.html');})
    app.post('/auth',(req,res) => {
        var user_name = req.body.username;
        var password=req.body.password;
    
        var data={
            "user":user_name,
            "password":password
        }
        db.collection('loginData').insertOne(data,function(err, collection){ 
            if (err) throw err; 
            console.log("Record inserted Successfully");       
        }); 
              
        return res.sendFile(__dirname + '/loggedIn.html');
    })
    app.listen(3000,function(){console.log('lsitening on 3000')})
}).catch(console.error)






