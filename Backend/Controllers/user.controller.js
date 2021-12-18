import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();
import Listing from "../Models/hotels.model.js";
import hotel from "../Models/adminHotelUser.model.js";
import UserModel from "../Models/user.model.js";
import bookingTable from "../Models/hotelbooking.model.js";

const secret = process.env.SECRATE_TOKEN;

export const SignIn = async (req, res) => {
  const { email, password } = req.body;
  const userExists = await UserModel.findOne({ email });
  if (!userExists) {
    return res.json({
      message: "Incorrect credentials"
    });
  }

  const isMatchingPassword = await bcrypt.compare(
    password,
    userExists.password
  );
  if (!isMatchingPassword) {
    return res.json({
      message: "Incorrect credentials"
    });
  }

  const token = jwt.sign({ userExists }, secret, { expiresIn: "7 days" });

  res.json({
    status: "200",
    message: "Correct credentials",
    data: userExists,
    token: token
  });
};
export const SignUp = async (req, res) => {
  const { email, phonenumber, name, password } = req.body;

  const allReadyRegistered = await UserModel.findOne({ email });

  if (allReadyRegistered) {
    return res.json({
      message: "Email already registered!"
    });
  }

  const hashpassword = await bcrypt.hashSync(password);

  const newUser = new UserModel({
    email,
    phonenumber,
    name,
    password: hashpassword
  });
  newUser
    .save()
    .then(async (data) => {
      const token = jwt.sign({ data }, secret, { expiresIn: "7 days" });

      res.json({
        status: "200",
        message: "user registered!",
        data: data,
        token: token
      });
    })
    .catch((error) => {
      res.json({
        staus: "404",
        message: error
      });
    });
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

  const hotelListingSearchResult = await Listing.find({
    city: { $regex: location, $options: "i" }
  }); //"room.adults":adults,"room.children":children "avaliableDate.startDate":arrivalDate,"avaliableDate.endDate":depatureDate,"room.rooms": rooms, "room.bed": beds ,

  if (hotelListingSearchResult.length == 0) {
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

export const updateUserDetails = async (req, res) => {
  const { id } = req.params;
  const update = req.body;
  try {
    const updated = await UserModel.findByIdAndUpdate({ _id: id }, update, {
      new: true
    });
    res.json({
      result: updated
    });
  } catch (error) {
    res.json({ message: error });
  }
};

export const booking = async (req, res) => {
  const { hotelID, userID, booking } = req.body;

  //check if hotelID and booking id exist



  const isHotel = await hotel.findOne({ _id: hotelID });
  if (!isHotel) {
    return res.json({
      status: "error",
      message: "Could not find the hotel"
    });
  }
  const isRoom = await Listing.findOne({
    _id: booking[0].bookingDetails.roomID
  });
  if (!isRoom) {
    return res.json({
      status: "error",
      message: "Could not find the room"
    });
  }

  //check if rooms are avaliable
  const numberAvaliable = isRoom.room.avaliableRooms;
  if (numberAvaliable <= 0) {
    return res.json({
      status: "error",
      message: "No avalible rooms"
    });
  }

  const isRegistered=await bookingTable.findOne({userID})



  if(isRegistered&&hotelID==isRegistered.hotelID){
    try{
     
      const update=await bookingTable.updateOne({userID},{$push:{booking:booking[0]}}, { "new": true, "upsert": true })

      return res.json({
        status: "Success",
        message: "You have successfully booked the hotel.",
        data:isRegistered
      })
    }catch(error){
      return res.json({Error:"Some error occured"})
    }
  }

  const BookRoom = new bookingTable({hotelID, userID, booking });
  BookRoom.save()
    .then(async (data) => {
      res.json({
        status: "Success",
        message: "You have successfully booked the hotel",
        data: data
      });
      //subtract avalible rooms
      try {
        const newAvalible = numberAvaliable + 1;
        const updateresults = await Listing.updateOne(
          { _id: booking[0].bookingDetails.roomID },
          { $set: { "room.avaliableRooms": newAvalible } }
        );
      } catch (error) {
        res.json(error);
      }
    })
    .catch((error) => {
      res.json({
        status: "Error",
        message: `Could not book hotel: ${error}`
      });
    });
};


export const getAllTrips = async (req, res) => {
  const { id } = req.params;
  const user= await UserModel.findOne({_id:id})

  if(!user){
    res.json({
      status:"Error",
      message:"Please make sure you are logged in"
    })
  }

  const trips=await bookingTable.find({userID:id});

  if(trips.length==0){
    return res.json({
      status:"Empty, never booked before",
      message:"No trips",
      data:[]
    })
  }

  return res.json({
    status:"Results",
    message:"All hotels",
    data:trips
  })

}



export const mytrips = async (req, res) => {
  const { userid,hotelid } = req.params;
  const user= await UserModel.findOne({_id:userid})
  
  if(!user){
    res.json({
      status:"Error",
      message:"Please make sure you are logged in"
    })
  }
  const hotels = await hotel.findOne({ _id:hotelid });
  if(!hotels){
    res.json({
      status:"Error",
      message:"Error happen while fetching hotel details"
    })
  }


  const trips=await bookingTable.find({userID:userid,hotelID:hotelid});

  var allBooking=[]
  trips[0].booking.map((_trip)=>{
    if(_trip.checkInDetails.isCheckedOut===false){
      allBooking.push(_trip)
    }
  })

  if(allBooking.length===0){
    return res.json({
      status:"Empty, never booked before",
      message:"No trips",
      data:[]
    })
  }

  res.json({
    status:"Results",
    message:"Current booking",
    data:allBooking
  })

};
export const history = async (req, res) => {
  const { userid,hotelid } = req.params;
  const user= await UserModel.findOne({_id:userid})
  
  if(!user){
    res.json({
      status:"Error",
      message:"Please make sure you are logged in"
    })
  }
  const hotels = await hotel.findOne({ _id:hotelid });
  if(!hotels){
    res.json({
      status:"Error",
      message:"Error happen while fetching hotel details"
    })
  }


  const trips=await bookingTable.find({userID:userid,hotelID:hotelid});
  var allBooking=[]
  trips[0].booking.map((_trip)=>{
    if(_trip.checkInDetails.isCheckedOut===true){
      allBooking.push(_trip)
    }
  })

  if(allBooking.length===0){
    return res.json({
      status:"Empty",
      message:"No history",
      data:[]
    })
  }

  res.json({
    status:"Results",
    message:"Current booking",
    data:allBooking
  })

};
