import mongoose from "mongoose";

const reviewSchema = mongoose.Schema({
  user: { type: String, required: true },
  comment: { type: String, required: true },
  rating: { type: Number, required: true, min: 1, max: 5 },
  image: { type: String, default: "" ,required:true},
  createdAt: { type: Date, default: Date.now },
}
,
{
  timestamps:true
}
);
const Review = mongoose.model("Review", reviewSchema);
export default Review;
