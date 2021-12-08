import mongoose from 'mongoose'
const Schema = mongoose.Schema;

const hotelUser = new Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true
    },
    phonenumber: {
      type: String
    },
    hotelname: {
      type: String,
      unique: true,
      required: true,
    },
    location: [
      {
        longitude: {
          type: String
        },
        latitude: {
          type: String
        }
      }
    ],
    password: {
      type: String,
      required: true
    },
    hoteladdress: {
        address: { type: String },
        city: { type: String },
        postalCode: { type: String },
        country: { type: String },
    },
    hotelAvatar: {
        type: String
    }
  },
  {
    timestamps: true
  }
);

const hotel = mongoose.model("hotels", hotelUser);

export default hotel;
