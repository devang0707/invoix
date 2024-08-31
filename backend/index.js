const dotenv = require("dotenv"); //to not to expose user password of mongodb
const cors = require("cors");
const express = require("express");
const mongoose = require("mongoose");

//import routes
const userRoute = require("./routes/users");               
const invoiceRoute = require("./routes/invoices");

dotenv.config();


const app = express();
app.use (express.json()); //it's a middleware cuz .use() method 


mongoose.connect(process.env.MONGO_URL,{useNewUrlParser:true, useUnifiedTopology:true}).then(()=>{console.log("mongoose connected");}).catch((err)=>{console.log(err)});
app.use(cors());

//api endpoints creation
app.use ("/api/users",userRoute);
app.use ("/api/invoices",invoiceRoute);

app.listen (8394, ()=>{
    console.log ("server running");
}) 