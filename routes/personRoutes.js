const express=require('express');
const router=express.Router();
const Person=require('./../person')

// POST route to add a person -------------------------------
 router.post('/',async(req,res)=>{
        try{
            const data=req.body
            // create  a new person document using mongo model
            const newPerson=new Person(data);
            // save new person to database
            const response=await newPerson.save()
            console.log("data saved")
            res.status(200).json(response);
        }
        catch(err){
            console.log(err)
            res.status(500).json({err:'server error'})
        }
    })
// GET method to get the person======================================
router.get('/',async (req,res)=>{
    try{
const data=await Person.find();
console.log("data fatched");
res.status(200).json(data);
    }
    catch(err){
 console.log(err)
 res.status(500).json({err:'internal server error'})
    }
})

// worktype get method=======================================
router.get('/:workType',async (req,res)=>{
    try{
        const workType=req.params.workType
        if(workType=="chef"||workType=="manager"||workType=="waiter")
      {
        const response=await Person.find({work:workType});
  console.log("response fetched")
  res.status(200).json(response);
        } else{
        res.status(500).json({err:'work type not found'})
        }
       }
    catch(err){
 console.log(err)
 res.status(500).json({err})
    }
});

// --------------------update  method in mongo db---------------------------
router.put('/:id',async (req,res)=>{
    try{
   const personId=req.params.id;// extract id from url
   const updatedPersonData=req.body;
   const response=await  Person.findByIdAndUpdate(personId,updatedPersonData,{
    new:true, //return updaed document
    runvalidators:true, //run mongoose validation 
   });

      if(!response){
        return res.status(404).json({err:"person not found"});
      }

   console.log("data updated");
   res.status(200).json(response);
    }
    catch(err){
   console.log(err)
   res.status(500).json({err:"interal server arror"});
    }
});

// --------------------DELETE  method in mongo db---------------------------
router.delete('/:id', async (req,res)=>{
    try{
        const personId=req.params.id;// extract id from url
        const response=await Person.findByIdAndDelete(personId);
 
        if(!response){
            return res.status(404).json({err:"person not found"});
          }
          console.log("data deleted");
          res.status(200).json({message:"data deleted successfully"});

    }catch(err){
        console.log(err)
        res.status(500).json({err:"interal server arror"});     
    }
})

module.exports=router;
