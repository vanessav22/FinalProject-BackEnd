const { Schema, model } = require("mongoose");

const reviewSchema = new Schema(
{
    userId: 
     { type: Schema.Types.ObjectId, ref: "User" }
    ,
  
     userComment: {
       type: String,
     },

     rating: {
      type: Number,
     }
    }
);
    
const Review = model("Review", reviewSchema);

module.exports = Review;