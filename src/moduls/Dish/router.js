import express from "express";
import { addDish, getAllDish, getDishUser } from "./controller";


const router =express.Router();

router.post('/',addDish)
router.get('/', getAllDish)
router.get('/user', getDishUser)


export default router