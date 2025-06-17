

import mongoose from "mongoose";
const DataSchema = new mongoose.Schema(
    {
     productId:{
        type:mongoose.Schema.Types.ObjectId ,
        required:true,
     }, 
      userId:{
        type:mongoose.Schema.Types.ObjectId ,
        required:true,
     },

     comments:{type:String},
     ratings:{type:String,required:true},



    },

    {
         timestamps:true,
         versionKey:false,
    }
);
const ReviewModel = mongoose.model("user-reviews"  , DataSchema);
export default ReviewModel ;