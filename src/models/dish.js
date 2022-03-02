import mongoose from 'mongoose';
const { Schema } = mongoose;

const  dish = new Schema({
    name: {
      type: String,
     
    },
    dscription: {
      type: String,
      
    },
    price: {
        type: Number,
        
      }
  });

export const Dish = mongoose.model('Dish', dish);