import express from "express";
const router = express.Router();
import {
  HotelLogIn,
  AddNewListing,
  getHotelList,
  updateDetails,
  bookings,
  bookingHistory,
  getUserHistory,
  getUser,
} from "../Controllers/hotel.controller.js";
import auth from "../middleware/auth.js";

router.route("/:_id").get(auth,getUser);
router.route("/hotellogin").post(HotelLogIn);
router.route("/addListing").post(auth, AddNewListing);
router.route("/getHotel/:id").get(auth, getHotelList);
router.route("/updatedatails/:id").post(auth, updateDetails);
router.route("/bookings/:id").get(auth, bookings);
router.route("/bookingshistory/:id").get(auth, bookingHistory); 
router.route("/userhistory/:hotelid/:userid").get(auth, getUserHistory);

export default router;
