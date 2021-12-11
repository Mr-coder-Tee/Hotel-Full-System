import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import hotel from "../Models/adminHotelUser.model.js";
import Listing from "../Models/hotels.model.js";
import bookingTable from '../Models/hotelbooking.model.js'
import dotenv from "dotenv";
dotenv.config();

const secret = process.env.SECRATE_TOKEN;

export const getHotelList = async (req, res) => {
  const { hotelname } = req.params;
  const currenthotel = await hotel.findOne({
    hotelname
  });

  if (!currenthotel) {
    return res.json({
      status: "404",
      message: "No postings",
      data: []
    });
  }
  const myListing = await Listing.find({ hotelname });
  res.json({
    status: "200",
    message: "Posing Avalible",
    data: myListing
  });
};

export const AddNewListing = async (req, res) => {
  const {
    hotelID,
    email,
    description,
    room,
    price,
    avaliableDate,
    facilities,
    galary,
    paymentMethods
  } = req.body;
  const logedInEmail = await hotel.findOne({ _id:hotelID });
  // const logedInEmail = await hotel.findOne({ hotelname:"Relax Inn" });
  

  //check loged in user or authenticate   
  if (!logedInEmail)
    return res.json({
      status: "400",
      message: "Please Login to use our services"
    });
  // if (!logedInEmail._id) {
  //   return res.json({
  //     status: "404",
  //     message: "Please update all relevent details before you can add a hotel"
  //   });
  // }
  if (!logedInEmail.hoteladdress.city) {
    return res.json({
      status: "404",
      message: "Please update all relevent details before you can add a hotel"
    });
  }

  const city = logedInEmail.hoteladdress.city;

  const newListing = new Listing({
    hotelID,
    email,
    description,
    room,
    price,
    facilities,
    galary,
    avaliableDate,
    city,
    paymentMethods
  });

  newListing
    .save()
    .then((data) => {
      res.json({
        status: "200",
        message: "new hotel successful added",
        data: data
      });
    })
    .catch((error) => {
      res.json({
        status: "400",
        message: error
      });
    });
};

export const HotelLogIn = async (req, res) => {
  const { email, password } = req.body;
  const isExist = await hotel.findOne({ email });
  if (!isExist)
    return res.json({
      status: "404",
      message: "Incorrect credentials"
    });

  const isPassword = await bcrypt.compare(password, isExist.password);

  if (!isPassword)
    return res.json({
      status: "404",
      message: "Incorrect credentials"
    });

  const token = jwt.sign({ isExist }, secret, {
    expiresIn: "7 days"
  });

  res.json({
    status: "200",
    data: isExist,
    token: token,
    result: isExist,
    token
  });
};

export const updateDetails = async (req, res) => {
  const { id } = req.params;
  const updatedInfo = req.body;
  try {
    const updateHotelInfo = await hotel.findByIdAndUpdate(
      { _id: id },
      updatedInfo,
      { new: true }
    );
    res.json({ result: updateHotelInfo });
  } catch (error) {
    res.json({ message: error });
  }
};

export const bookings=async(req,res)=>{
  const { id } = req.params;

  const hotel= await UserModel.findOne({_id:id})

  if(!hotel){
    res.json({
      status:"Error",
      message:"Please make sure you are logged in"
    })
  }

  const guests=await bookingTable.findOne({hotelID:id});

  if(guests.length==0){
    res.json({
      status:"Empty, never booked before",
      message:"No trips",
      data:[]
    })
  }

  var guestsBooking=[]
  guests.booking.map((_trip)=>{
    if(_trip.checkInDetails.isCheckedOut===false){
      guestsBooking.push(_trip)
    }
  })

  if(guestsBooking.length===0){
    return res.json({
      status:"Empty, never booked before",
      message:"No trips",
      data:[]
    })
  }

  res.json({
    status:"Results",
    message:"Current booking",
    data:guestsBooking
  })

}
