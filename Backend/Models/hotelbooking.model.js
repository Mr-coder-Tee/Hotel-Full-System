import mongoose from "mongoose";

const Schema = mongoose.Schema;

const booking = new Schema({
  hotelID: {
    type: String,
    required: true
  },
  userID: {
    type: String,
    required: true
  },
  booking: [
    {
    
      bookingDetails: {
        roomID: { type: String, required: true },
        arrivalDate: { type: Date, required: true },
        depatureDate: { type: Date, required: true },
        bed: { type: Number, required: true },
        adults: { type: Number, required: true },
        children: { type: Number, required: true },
        rooms: { type: Number, required: true },
        isPayed: { type: Boolean, required: true },
        isCancelled: { type: Boolean, default:false }
      },
      checkInDetails: {
        isCheckedOut: {
          type: Boolean,
          default: false
        },
        roomnumber: {
          type: String,
          default: "-"
        }
      }
    }
  ]
});

const bookingTable = mongoose.model("bookings", booking);

export default bookingTable;
