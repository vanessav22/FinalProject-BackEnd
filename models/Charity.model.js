const { Schema, model } = require("mongoose");

const charitySchema = new Schema(
  {
    email: {
      type: String,
      required: [true, "Email is required."],
      unique: true,
      lowercase: true,
      trim: true,
    },
    password: {
      type: String,
      required: [true, "Password is required."],
    },
    name: {
      type: String,
      required: [true, "Name is required."],
    },

    image: {
      type: String,
    },

    typeofCharity: {
      type: String,
    },

    urgencyNumber: {
      type: Number,
    },

    description: {
      type: String,
    },

    urlLink: {
      type: String,
    },

    reviews: [{ type: Schema.Types.ObjectId, ref: "Review" }],
  },
  {
    // this second object adds extra properties: `createdAt` and `updatedAt`
    timestamps: true,
  }
);

const Charity = model("Charity", charitySchema);

module.exports = Charity;