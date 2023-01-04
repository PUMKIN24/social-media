import  Express  from "express";
import { loginUser, registerUser } from "../Controllers/AuthController.js";


const router = Express.Router()



//route
router.post('/register' , registerUser)
router.post('/login', loginUser)

export default router