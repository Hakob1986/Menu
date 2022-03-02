import express from "express";
import bodyParser from "body-parser";
import mongoose from 'mongoose';

import userRouter from "./src/moduls/User/router"
import dishRouter from "./src/moduls/Dish/router"

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

mongoose.connect('mongodb://localhost/restaurant',(error)=>{
   if(!error){
    console.log("Success");
   }else{
    console.log("Error connection to database");
   }
})

app.use("/user/", userRouter);
app.use("/dish/", dishRouter);


// app.use(function (req, res) {
//   createError(404).then(res.send("Not found"));
// });


app.listen(3012, () => console.log("server creat"));
