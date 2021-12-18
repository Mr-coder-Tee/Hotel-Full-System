import mongoose from "mongoose";

const Schema = mongoose.Schema;

const Review = new Schema({

    hotelID:{
        type:String,
        required:true,
    },
    reviewList:[
        {
            listingID:{
                type:String,
                required:true,
            },
            comment:{
                type:String,
                required:true,
            },
            stars:{
                type:Number,
                required:true,
            },
            userID:{
                type:String,
                required:true,
            },
        }
    ]

});

const ReviewTable = mongoose.model("Reviews", Review);

export default ReviewTable;
