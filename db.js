const mongoose=require('mongoose');
const mongoURL='mongodb://127.0.0.1:27017/hotelsdb';
//set up mongose connection =================================================================
mongoose.connect(mongoURL);
const db=mongoose.connection
db.on('open',(err)=>{ // event listener 
    if(err){
        console.log('mongodb disconnected')
    }
    console.log('connected to mongodb server is run')
})

//export this 
module.exports=db;