const router = require("express").Router(); //cuz route bnana
const Pin = require ("../models/Pin"); //imported schema 

//pin creation ; Parameter 2 is the function which gonna take action in page name of Parameter 1 
router.post("/",async(req,res)=>{ //expands to /pins
    
    const newPin =  new Pin(req.body); //REQ
    try {  
        const savedPin = await newPin.save(); //SAVE
        res.status(200).json(savedPin);  //to send JSON data in the response body
    }
    catch{ 
        res.status(500).json(err); 
    }
});

//get all pins 
router.get("/",async(req,res)=>{

    try{  
        const pins =await Pin.find(); //Find All
        res.status(200).json(pins); //SEND
    }
    catch(err){
        res.status(500).json(err);
    }
});

//delete pin
router.delete('/:id',async(req,res)=>{
    const id = req.params.id     //IMP
    try{
        const pins = await Pin.findByIdAndRemove(id) 
        res.status(200).json(pins)
    }
    catch(err){
        console.log(err)
    }
})


module.exports = router;