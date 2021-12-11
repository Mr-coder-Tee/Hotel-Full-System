import express from "express";
const UserRouter = express.Router();
import {SignIn,SignUp,HotelPosts,searchPosts,updateUserDetails,booking,mytrips,history,getAllTrips} from "../Controllers/user.controller.js";
import auth from '../middleware/auth.js'

UserRouter.route('/usersignup').post(SignUp)
UserRouter.route('/usersignin').post(SignIn)
UserRouter.route('/getPosts').get(auth,HotelPosts)
UserRouter.route('/searchPosts').post(auth,searchPosts)
UserRouter.route('/update/:id').post(auth,updateUserDetails)
UserRouter.route('/booking').post(auth,booking);
UserRouter.route('/trips/:userid/:hotelid').get(auth,mytrips);
UserRouter.route('/history/:userid/:hotelid').get(auth,history);
UserRouter.route('/getTrips/:id').get(auth,getAllTrips);



export default UserRouter;
