const express = require("express")
const mongoose = require("mongoose")
const DB_LINK = "mongodb+srv://redownat:25112002@cluster0.89huq6r.mongodb.net/test"
const User = require('./module/studentModel');
const bodyParser = require('body-parser')
const app = express()
const port = process.env.PORT || 2000


app.use(bodyParser.json());

mongoose.connect(DB_LINK).then(
        function(){
            console.log("Database is connected")
        }
    ).
    catch(
        function(){
            console.log("Database connecting error!")
        }
   )
    
//Get user data from database
app.get('/users', async (req, res) => {
    try{
        const user = await User.find();
        res.send(user);
    }catch (error) {
        res.send(error);
    }
});
//Get user data from database using user id
app.get('/users/:id', async (req, res) => {
    try {
        const user = await User.findOne({id: req.params.id});
        if(!user){
            return res.send(user);                
        }
        res.send(user);
    } catch (error) {
        res.send(error);
    }
});

//Add user information to database
app.post("/add", async (req, res) => {
    const user = new User(req.body);
    try {
        await user.save();
        res.send(user);
    } catch (error) {
        res.send(error);
    }
});

//Running application at localhost:2000
app.listen(port, function (){
    console.log("Server is running on 2000")
    
    
})





