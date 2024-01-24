import mongoose, {Schema} from "mongoose";

const reviewSchema = new Schema({
    userName: {
      type: String,
      required: true,
    },
    productId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
    },
    rating: {
      type: Number,
      required: true,
      min: 0,
      max: 5,
    },
    reviewContent: {
      type: String,
      required: true,
    },
    createdAt: {
      type: Date,
      default: new Date(),
    },
  });


  export const reviews = mongoose.models.reviews || mongoose.model("reviews", reviewSchema);