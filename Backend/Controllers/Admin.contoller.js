import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import Admin from "../Models/Admin.model.js";
import Hotel from "../Models/adminHotelUser.model.js";
import dotenv from "dotenv";
const secret = process.env.SECRATE_TOKEN;

export const SignIn = async (req, res) => {
  const { email, password } = req.body;
  const isExist = await Admin.findOne({ email });

  if (!isExist) {
    return res.json({
      status: "404",
      message: "Incorrect Credentials"
    });
  }

  const isCorrectPassword = await bcrypt.compare(password, isExist.password);

  if (!isCorrectPassword) {
    return res.json({
      message: "Incorrect credentials"
    });
  }

  return res.json({
    status: "200",
    message: "Correct",
    data: isExist
  });
};
export const SignUp = async (req, res) => {
  const { email, password } = req.body;
  const hashpassword = await bcrypt.hashSync(password);
  const newAdmin = new Admin({ email, password: hashpassword });

  newAdmin
    .save()
    .then((data) => res.json({ result: "Admin added" }))
    .catch((error) => {
      res.json({ message: error });
    });
};

export const addHotel = async (req, res) => {
  const { email, hotelname, password } = req.body;
  const phonenumber = "";
  const location = { longitude: "", latitude: "" };
  const hoteladdress = { address: "", city: "", postalCode: "", country: "" };
  const hotelAvatar = "";

  const checkEmialExist= await Hotel.findOne({email})
  const checkhotelExist= await Hotel.findOne({hotelname})

  if(checkEmialExist){
    return res.json({
      status: "Error",
      message: "email name must be unique",
    });
  }
  if(checkhotelExist){
    return res.json({
      status: "Error",
      message: "hotel name must be unique",
    });
  }

  const hashpassword = await bcrypt.hashSync(password);

  const newHotel = new Hotel({
    email,
    password: hashpassword,
    hotelname,
    phonenumber,
    location,
    hoteladdress,
    hotelAvatar
  });

  //Save to database

  newHotel
    .save()
    .then(async (data) => {
      const token = await jwt.sign({ data }, secret, { expiresIn: "7 days" });
      res.json({
        status: "200",
        message: "new hotel successful added",
        data: data,
        token:token
      });
    })
    .catch((error) => {
      res.json({
        status: "400",
        message: error
      });
    });
};

export const viewHotels=async(req,res)=>{
  const allHotel=await Hotel.find()
  if(allHotel.length==0){
    return res.json({
      message:'No Hotels'
    })
  }
  res.json({
      status:'200',
      message:'Hotels',
      data:allHotel
  })
}

//reset password
//search 
//delete hotel...
//disable or suspend