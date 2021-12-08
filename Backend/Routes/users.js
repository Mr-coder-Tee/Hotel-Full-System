import express from "express";
const UserRouter = express.Router();
import {SignIn,SignUp,HotelPosts,searchPosts} from "../Controllers/user.controller.js";
import auth from '../middleware/auth.js'

UserRouter.route('/usersignup').post(SignUp)
UserRouter.route('/usersignin').post(SignIn)
UserRouter.route('/getPosts').get(HotelPosts)
UserRouter.route('/searchPosts').post(auth,searchPosts)


export default UserRouter;
