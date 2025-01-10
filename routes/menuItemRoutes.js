const express=require('express');
const router=express.Router();

const MenuItem=require('./../Menu');

//------------------hotels menu POST item schema----------------------
router.post('/', async (req,res)=>{
    try{
        const Menudata=req.body;
        const newMenu= new MenuItem(Menudata);
        const response= await newMenu.save();
        console.log("menu data save")
        res.status(200).json(response);
    }
    catch(err){
        console.log(err)
        res.status(500).json({err})
    }
})
// --------------menu GET methods---------------------------
router.get('/', async (req,res)=>{
    try{
        const Menudata= await MenuItem.find();
        console.log("menu item fetched")
        res.status(200).json(Menudata);
    }
    catch(err){
        console.log(err)
        res.status(500).json({err:"internet server error"});
    }
});

// taste----------------------------------------------
router.get('/:taste', async (req,res)=>{
    try{
        const taste=req.params.taste;
        if(taste=="sour"||taste=="sweet"||taste=="spicy"){
   const response= await MenuItem.find({taste})
   console.log(response,"response fetched")
  res.status(200).json(response);
        }
        else{
      res.status(500).json({err})
        }
    }
    catch(err){
        res.status(500).json({err})

    }
})
//comment change
module.exports=router;