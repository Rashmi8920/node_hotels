// const loadash = require("lodash");
// create a server(using express) on our localhost==============================================================
const express = require("express");
const app = express();
const db=require('./db')
 
const bodyParser= require("body-parser");
app.use(bodyParser.json()); // stores output in req.body

app.get('/', function (req, res) {
    res.send("welcome to out Hotel");
});

 // import the router files--------------------------------------------------
  const personRoutes=require('./routes/personRoutes');
  const menuItemroutes=require('./routes/menuItemRoutes');

  //use the routers
  app.use('/person',personRoutes);
 app.use('/menu',menuItemroutes);

  app.listen(2000,()=>{
    console.log("server running")
    })







// console.log("server is running right now");
// var add= function(a,b){
//     return a*  b;
// }
// var result= add(10,20);
// console.log(result);

// (function add(a,b){
//  console.log("My name is rashmi singh") 
// })
// ()

//  callback function================================================================
//  let callback=()=>{
//  console.log("this is gf a callback functon ")
//  }
//   const add= function(a,b, callback){
//     //  return a+b
//     console.log(a+b)
//      callback()
//   }
//   add(10,20, callback);

// core modules in node js================================================================
// const fs=require("fs");
// const os=require("os");
// const userinfo= os.userInfo();
// // console.log(userinfo);

// fs.appendFile("greeting.txt" , "hi" + userinfo.username ,()=>{
//     console.log("file created successfully");
// })

// loadash module================================================================================

// var arr=[1,1,2,2,3,3,4,4,5,]
// var output= loadash.uniq(arr);
// console.log(output)




