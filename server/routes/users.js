import express from "express";
import { login, signup } from "../controllers/auth.js";
import {getAllUsers} from '../controllers/users.js'

const router = express.Router();

router.post('/signup',signup)  // here signup is used as a callback function
router.post('/login', login)  // here login is used as a callback function
router.get('/getAllUsers',getAllUsers)

export default router;