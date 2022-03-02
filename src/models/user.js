import mongoose from 'mongoose';

const { Schema } = mongoose;

const  user = new Schema({
    name: {
      type: String,
     
    },
    lastname: {
      type: String,
      
    },
    phone: {
        type: String,
       
    },
    email: {
        type: String,
       
      },
    dish_id:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Dish'
      }]
  }, {timestamps:true});

 export const User =  mongoose.model('User', user);