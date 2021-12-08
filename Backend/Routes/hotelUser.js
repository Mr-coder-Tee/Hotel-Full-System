import express from "express";
const router = express.Router();
import {
  RegisterHotel,
  HotelLogIn,
  AddNewListing,
  getHotelList
} from "../Controllers/hotel.controller.js";

router.route("/addhotel").post(RegisterHotel);
router.route("/hotellogin").post(HotelLogIn);
router.route("/addListing").post(AddNewListing);
router.route("/getHotel/:hotelname").get(getHotelList);


export default router;
