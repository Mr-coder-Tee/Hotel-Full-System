import express from "express";
import {SignIn,SignUp,addHotel,viewHotels} from '../Controllers/Admin.contoller.js'
const router = express.Router();

router.route('/adminSignIn').post(SignIn)
router.route('/adminSignUp').post(SignUp)
router.route('/addNewHotel').post(addHotel)
router.route('/').get(viewHotels)

export default router

