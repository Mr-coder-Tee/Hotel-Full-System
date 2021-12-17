import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import hotel from "../Models/adminHotelUser.model.js";
import Listing from "../Models/hotels.model.js";
import bookingTable from "../Models/hotelbooking.model.js";
import dotenv from "dotenv";
dotenv.config();

const secret = process.env.SECRATE_TOKEN;

export const getHotelList = async (req, res) => {
  const { id } = req.params;
  console.log('id',id)
  const currenthotel = await hotel.findOne({
    _id:id
  });
  console.log("--->",currenthotel)
  if (!currenthotel) {
    return res.json({
      status: "404",
      message: "please log in",
      data: []
    });
  }
  console.log('loading....')
  const myListing = await Listing.find({ hotelID: id});//{ hotelID: id}
  console.log("list--->",myListing)

  if(myListing.length===0){
    return res.json({message:"No postings",data:[]})
  }

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
    paymentMethods,
    city
  } = req.body;
  const logedInEmail = await hotel.findOne({ _id: hotelID });
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

  // const city = logedInEmail.hoteladdress.city;

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

  //store token local storage
  res.json({
    status: "200",
    data: isExist,
    token: token
  });
};

export const updateDetails = async (req, res) => {
  const { id } = req.params;
  const updatedInfo = req.body;


  console.log(updatedInfo);

  if(updatedInfo.password){
     return console.log('trying to update password')
  }
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

export const bookings = async (req, res) => {
  const { id } = req.params;

  const hotels = await hotel.findOne({ _id: id });

  if (!hotels) {
    res.json({
      status: "Error",
      message: "Please make sure you are logged in"
    });
  }

  const guests = await bookingTable.findOne({ hotelID: id });

  if (guests.length == 0) {
    res.json({
      status: "Empty, never booked before",
      message: "No trips",
      data: []
    });
  }

  var guestsBooking = [];
  guests.booking.map((_trip) => {
    if (_trip.checkInDetails.isCheckedOut === false) {
      guestsBooking.push(_trip);
    }
  });

  if (guestsBooking.length === 0) {
    return res.json({
      status: "Empty, never booked before",
      message: "No booking",
      data: []
    });
  }

  res.json({
    status: "Results",
    message: "Current bookings",
    data: guestsBooking
  });
};

export const bookingHistory = async (req, res) => {
  const { id } = req.params;
  const hotels = await hotel.findOne({ _id: id });

  if (!hotels) {
    res.json({
      status: "Error",
      message: "Please make sure you are logged in"
    });
  }

  const guests = await bookingTable.findOne({ hotelID: id });

  if (guests.length == 0) {
    res.json({
      status: "Empty, never booked before",
      message: "No history",
      data: []
    });
  }

  var guestsBooking = [];
  guests.booking.map((_trip) => {
    if (_trip.checkInDetails.isCheckedOut === true) {
      guestsBooking.push(_trip);
    }
  });

  if (guestsBooking.length === 0) {
    return res.json({
      status: "Empty, never booked before",
      message: "No history",
      data: []
    });
  }

  res.json({
    status: "Results",
    message: "Current history",
    data: guestsBooking
  });
};

export const getUserHistory = async (req, res) => {
  const { hotelid, userid } = req.params;
  const booking = await bookingTable.find({ hotelID: hotelid, userID: userid });

  //not working

  if (!booking.length == 0) {
    return res.json({
      status: "No history",
      message: "No history",
      data: []
    });
  }

  res.json({
    status: "history",
    message: "history",
    data: booking
  });
};

export const getUser = async (req, res) => {
  const { _id } = req.params;

  try {
    const userFromToken = await hotel.findOne({
      _id
    });


    if (!userFromToken) {
      return res.json({
        status: "Error",
        message: "An error occured while fetching user"
      });
    }

    return res.json({
      status: "Success",
      data: userFromToken
    });
  } catch (error) {
    res.json({
      status: "Error",
      message: error
    });
  }
};
