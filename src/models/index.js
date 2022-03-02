import mongoose from 'mongoose';
import user from "./user";
import dish from './dish';
import myDish from './mydish'

mongoose.connect('mongodb://localhost/restaurant',(error)=>{
   if(!error){
    console.log("Success");
   }else{
    console.log("Error connection to database");
   }
})



