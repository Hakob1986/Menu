
import { User } from "../../models/user";

export const addUser = (req, res)=>{
    User.create(req.body)
    .then((user) => {
      res.send(user);
    })
    .catch((err) => res.status(500).send(err));
}

export const getAllUser =(req, res) =>{
  User.find() 
  .then((user) => {
    res.send(user);
  })
  .catch((err) => res.status(500).send(err));
}

export const getUserAllDish =(req, res) =>{
  User.find().populate('dish_id',).then((user) => {
    res.json(user);
  })
  .catch((err) => res.status(500).send(err));
}

export const getUser =(req , res)=>{
  User.find({dish_id:req.body.id}).populate('dish_id').select('name`')
.then(data =>res.json(data));
}
