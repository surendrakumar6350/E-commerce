import mongoose, { Schema } from "mongoose";

const productSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  money: {
    type: Number,
    required: true,
    min: 0,
  },
  category: {
    type: String,
    required: true,
  },
  brand: String,
  imageUrl: String,
  stockQuantity: {
    type: String,
    required: true,
  },
  totalmoneyforcart: {
    type: Number,
    required: true,
  },
  sale: String,
  cuttingrate: String,
  count: {
    type: Number,
    required: true,
  },
  rating: String,
  url: {
    type: Object,
    required: true,
  },
  index: {
    type: Number,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },

});

export const products = mongoose.models.products || mongoose.model("products", productSchema);