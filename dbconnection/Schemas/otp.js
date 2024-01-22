import mongoose, {Schema} from "mongoose";

const otpschema = new Schema({
    email: String,
    otp: Number,
    createdAt: Number
});

export const otp = mongoose.models.otp || mongoose.model("otp", otpschema);