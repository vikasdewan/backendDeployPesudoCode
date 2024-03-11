require('dotenv').config()
const app = require('express')();
const http = require('http').Server(app);

const mongoose= require('mongoose');
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended:true}));

mongoose.connect("mongodb+srv://dewanganvikas192:SBv2odEfcte2gObt@ewaste-db.nft0ncb.mongodb.net/?retryWrites=true&w=majority");

//create a data schema
const infoSchema ={
    name:String,
    pincode:String,
    mobilenumber :String,
    No_Of_Product:String,
    dateOfPurchase:String,
    dateOfPickup:String,
    Address : String,
}
 
const user  = mongoose.model("info",infoSchema);

app.get("/",function(req,res){
    res.sendFile(__dirname+"/index.html");
})

// app.get("/thankyou",function(req,res){
//     res.sendFile(__dirname+"/index.html");
// })
app.post("/",function(req,res){
    
    // console.log(req.body.name)
    // let newUser = new user({
    //     name: req.body.name,
    //     pincode:req.body.pincode

    // });
        
    //  newUser.save();
    
    
    
    
    // const user = require('./models/usermodel')
    
    async function insert(){
        user.create({
            name:req.body.name,
            mobilenumber : req.body.mobileNumber,
            No_Of_Product:req.body.No_Of_Product,
            dateOfPurchase:req.body.dop,
            dateOfPickup: req.body.pickup,
            Address : req.body.address,
            pincode:req.body.pincode,
            
        })
        
    }
    insert();
     res.redirect('/');
 })
             
// http.listen(3000,function(){
//     console.log("server is running");
// });

// console.log("hello World");

// const express = require('express');
// const app = express();
// const port = 3000

// app.get('/', function (req, res) {
//   res.send('Hello World')
// })

// app.listen(process.env.PORT,() => {
//     console.log("app is listening at port 3000")
// });