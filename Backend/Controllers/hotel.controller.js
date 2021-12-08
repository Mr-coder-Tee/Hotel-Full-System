import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import hotel from "../Models/adminHotelUser.model.js";
import Listing from "../Models/hotels.model.js";
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
    hotelname,
    email,
    description,
    room,
    price,
    facilities,
    galary,
    reviews,
    avaliableDate,
    hoteladdress
  } = req.body;
  const logedInEmail = await hotel.findOne({hotelname});

//check loged in user or authenticate

  if (!logedInEmail)
    return res.json({
      status: "400",
      message: "Please Login to use our services"
    });

    if(!logedInEmail.hoteladdress.city){
      return res.json({
        status: "404",
        message: "Please register all your details before you can add a hotel"
      })
    }

  const newListing = new Listing({
    hotelname,
    email,
    description,
    room,
    price,
    facilities,
    galary,
    reviews,
    avaliableDate,
    hoteladdress,
    city:logedInEmail.hoteladdress.city
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

  const token = jwt.sign({isExist}, secret, {
    expiresIn: "7 days"
  });

  res.json({
    status: "200",
    data: isExist,
    token: token,
    result:isExist,token
  });
};

export const RegisterHotel = async (req, res) => {
  const { email, password, hotelname } = req.body;

  const phonenumber = "";
  const hoteladdress = {
    address: "",
    city: "",
    postalCode: "",
    country :""
  };

  const hotelAvatar = "";
  const latitude = "";
  const longitude = "";
  const hashpassword = await bcrypt.hashSync(password);

  const newHotel = new hotel({
    email,
    password: hashpassword,
    phonenumber,
    hotelname,
    hoteladdress,
    hotelAvatar,
    location: { latitude, longitude }
  });
  newHotel
    .save()
    .then(async(data) =>
    {
      const token= await jwt.sign({data}, secret, { expiresIn: "7 days" })
      res.json({
        status: "Hotel added",
        message: "Hotel has been succefully added to the database",
        data: data,
        token: token,
        result:data,token
      })}
    )
    .catch((err) =>
      res.status(400).json({
        message: `${err}`
      })
    );
};
