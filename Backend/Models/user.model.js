import mongoose from "mongoose";

const Schema = mongoose.Schema;

const User = new Schema({
  email: {
    type: String,
    required: true,
    trim: true,
    unique: true
  },
  phonenumber: {
    type: String,
    required: true,
    trim: true
  },
  name: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true,
    trim: true
  },
  addresses: [
    {
      address: { type: String },
      city: { type: String },
      postalCode: { type: String },
      country: { type: String }
    }
  ],
  bankcards: [
    {
      cardholdername: {
        type: String,
        required: true
      },
      cardnumber: {
        type: String,
        required: true
      },
      expirydate: {
        type: Date,
        required: true
      },
      cvv: {
        type: Number,
        required: true
      }
    }
  ]
});

const UserTable = mongoose.model("Users", User);

export default UserTable;
