import mongoose from "mongoose";

const Schema = mongoose.Schema;

const UserTrip = new Schema({
  userID: {
    type: String,
    required: true
  },
  booking: [
    {
      hotelID: {
        type: String,
        required: true
      },
      ListingID: {
        type: String,
        required: true
      },
      bookingDetails: {
        arrivalDate: {type: String,required: true},
        depatureDate: {type: String,required: true},
        bed: { type: Number, required: true },
        adults: { type: Number, required: true },
        children: { type: Number, required: true },
        rooms: {type: Number,required: true},
        isPayed:{type: Boolean,required: true},
        isCancelled:{type: Boolean,required: true}
      }
    }
  ]
});

const Trips = mongoose.model("Trips", UserTrip);

export default Trips;
