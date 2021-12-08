import mongoose from "mongoose";

const Schema = mongoose.Schema;

const hotelListing = new Schema({
  hotelname: {
    required: true,
    type: String
  },
  email:{
    required: true,
    type: String
  },
  city:{
    required: true,
    type: String
  },
  description: {
    required: true,
    type: String
  },
  room: {
    bed: { type: Number },
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
  avaliableDate:{
      startDate:{
        required: true,
          type: String
      },
      endDate:{
        required: true,
          type: String
      }
  },
  facilities: [
    {
      facility: {
        name: {
          required: true,
          type: String
        },
        iconname: {
          required: true,
          type: String
        },
        icontype: {
          required: true,
          type: String
        }
      }
    }
  ],
  galary: [String],
  reviews: [
    {
      stars: {
        required: true,
        type: Number
      },
      commment: {
        required: true,
        type: String
      },
      username: {
        required: true,
        type: String
      },
      useravatar: {
        required: true,
        type: String
      }
    },
  ],
  postAt: {
    type: Date,
    default: new Date()
  }
});

const Listing = mongoose.model("Listings", hotelListing);

export default Listing;
