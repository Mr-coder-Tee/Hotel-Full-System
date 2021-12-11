import express from "express";
const router = express.Router();
import {
  HotelLogIn,
  AddNewListing,
  getHotelList,
  updateDetails,
  bookings
} from "../Controllers/hotel.controller.js";
import auth from "../middleware/auth.js";

router.route("/hotellogin").post(HotelLogIn);
router.route("/addListing").post(auth, AddNewListing);
router.route("/getHotel/:hotelname").get(auth, getHotelList);
router.route("/updatedatails/:id").post(auth, updateDetails);
router.route("/bookings/:id").post(auth, bookings);

export default router;
