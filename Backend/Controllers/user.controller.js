import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();
import Listing from "../Models/hotels.model.js";
import hotel from "../Models/adminHotelUser.model.js";

const secret = process.env.SECRATE_TOKEN;

export const SignIn = async (req, res) => {
  console.log("login");
};
export const SignUp = async (req, res) => {
  console.log("sign up");
};
export const HotelPosts = async (req, res) => {
  const posts = await Listing.find();

  if (!posts) {
    return res.json({
      status: "400",
      message: "No posts",
      data: []
    });
  }
  return res.json({
    status: "400",
    message: "Posts",
    data: posts
  });
};

export const searchPosts = async (req, res) => {
  const { location, adults, children, rooms, beds, arrivalDate, depatureDate } =
    req.body;

  const hotelListingSearchResult = await Listing.find({ "city": `/${location}/` });  //"room.adults":adults,"room.children":children "avaliableDate.startDate":arrivalDate,"avaliableDate.endDate":depatureDate,"room.rooms": rooms, "room.bed": beds ,


  if (hotelListingSearchResult.length==0) {
    return res.json({
      status: "404",
      message: "No results match your search crateria",
      data: []
    });
  }

  return res.json({
    status: "200",
    message: "Results",
    data: hotelListingSearchResult
  });
};
