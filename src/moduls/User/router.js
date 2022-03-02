import express from "express";
import { addUser, getAllUser, getUser, getUserAllDish,} from "./controller";

const router =express.Router();

router.post("/", addUser);
router.get("/", getAllUser)
router.get("/dish/", getUserAllDish)
router.get('/user/', getUser)

export default router