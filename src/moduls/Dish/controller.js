import { Dish } from "../../models/dish";

export const addDish = (req, res)=>{
    Dish.create(req.body)
    .then((dish) => {
      res.send(dish);
    })
    .catch((err) => res.status(500).send(err));
}

export const getAllDish =(req, res) =>{
    Dish.find() 
    .then((dish) => {
      res.send(dish);
    })
    .catch((err) => res.status(500).send(err));
  }

  export const getDishUser =(req, res) =>{
    Dish.find().populate('user_id') 
    .then((dish) => {
      res.send(dish);
    })
    .catch((err) => res.status(500).send(err));
  }