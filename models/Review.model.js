const { Schema, model } = require("mongoose");

const reviewSchema = new Schema(
{
    userId: {
        type: { type: Schema.Types.ObjectId, ref: "User" }
      },
  
     userComment: {
       type: String,
     }
    }
);
    
const Review = model("Review", reviewSchema);

module.exports = Review;