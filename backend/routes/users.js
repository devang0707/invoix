const router = require("express").Router(); //cuz route bnana
const User = require ("../models/User");
const bcrypt = require('bcrypt');


//Register
/* 
Salt creation
Storing hashedPass
Saving User Model
Send Response
 */
router.post("/register",async(req,res)=>{    //expands to /api/users/register
    
    try {  
        //yaha par sirf pass input karvaya (left username n email) instead of req whole body ie req.body to hash 
        const salt = await bcrypt.genSalt(10);//loading of salt occurs as a prequiste for hashing; 10 is default to be filled,not much significant 
        const hashedPassword = await bcrypt.hash(req.body.password,salt); //req.body.password got hashed
        
        // input/create new User by requesting (individually store krne pd gye sb properties kyonki hashedpass ko bhi individually store krna tha)
        const newUser = User({
            username:req.body.username,
            email:req.body.email,
            password:hashedPassword, //IMPORTANT: instead of storing req.body.password, we stored the hashed one in the schema
        })

        //save user and send response
        const saveUser = await newUser.save();   //yaha save krenge (CREATE OPERATION)
        //res.status(200).json({_id:saveUser._id});  //ERROR RESOLUTION: earlier it was dont wanna console.log all the properties, just his id
        res.status(200).json({_id:saveUser._id, username:saveUser.username});  //now it is => Jo object hamne pass kra hai (whose properties we gave are _.id and username) vo console.log(res) krne mai show krega jiska fir hamne register mai use kra
    }
    catch(err){ 
        res.status(500).json(err); 
    }
}); 


//Login 
/* 
Find one by username
Compare requested pass with the one in above founded user
If all allright , send id and username of the user  
*/
router.post("/login",async(req,res)=>{     //expands to /api/users/login thanks to app.use() in index.js
    try{
        //find user
        const inputByUser = await User.findOne({username:req.body.username})   //yaha find krenge (READ OPERATION)
        !inputByUser && res.status(/*400*/).json("User does not Exist");       //koi bhi error code like 400,500 nhi dalna vrna nodemmon crash hojata incorrect login krne pr aur fir dubara restart krna pdta
        
        //validate user 
        const validPassword = await bcrypt.compare(req.body.password,inputByUser.password);
        !validPassword && res.status(/*400*/).json("Wrong password for the User");

        //send res if everything is okay
        res.status(200).json({_id:inputByUser._id, username:inputByUser.username});

    }
    catch(err){
        res.status(500).json(err);
    }
});







module.exports = router;