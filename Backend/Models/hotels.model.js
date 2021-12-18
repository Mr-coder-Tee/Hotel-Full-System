import mongoose from "mongoose";

const Schema = mongoose.Schema;

const hotelListing = new Schema({
  hotelID: {
    required: true,
    type: String
  },
  email: {
    required: true,
    type: String
  },
  city: {
    required: true,
    type: String
  },
  description: {
    required: true,
    type: String
  },
  room: {
    beds: { type: Number },
    adults: { type: Number },
    children: { type: Number },
    rooms: {
      type: Number
    },
    avaliableRooms: {
      type: Number
    }
  },
  price: {
    type: Number
  },
  avaliableDate: {
    startDate: {
      required: true,
      type: Date
    },
    endDate: {
      required: true,
      type: Date
    }
  },
  facilities: [String],
  galary: [String],
  postAt: {
    type: Date,
    default: new Date()
  },
  paymentMethods: [
    String
  ]
});

const Listing = mongoose.model("HotelRooms", hotelListing);

export default Listing;
