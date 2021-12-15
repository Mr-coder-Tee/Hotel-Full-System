import mongoose from "mongoose";
const Schema = mongoose.Schema;

const hotelUser = new Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true
    },
    hotelname: {
      type: String,
      unique: true,
      required: true
    },

    password: {
      type: String,
      required: true
    },
    phonenumber: {
      type: String
    },
    location: {
      longitude: {
        type: String
      },
      latitude: {
        type: String
      }
    },
    hoteladdress: {
      address: { type: String },
      city: { type: String },
      postalCode: { type: String },
      country: { type: String }
    },
    hotelAvatar: {
      type: String
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  {
    timestamps: true
  }
);

const hotel = mongoose.model("HotelTable", hotelUser);

export default hotel;
