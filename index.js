


// import config from "./src/config/config.js" ;
// import { config } from "dotenv";


import "dotenv/config" ;
import mongoose from "mongoose";
import { MONGO_URI, PORT } from "./src/config/config.js";
import app from "./app.js";





mongoose.connect(MONGO_URI).then(()=>{
    console.log('Database Connected Successfully.');

}).catch((err)=>{
console.log('database connection error', err); 
});


app.listen(6000 , ()=>{
    console.log(`Server Started at port no- ${6000}`)
})