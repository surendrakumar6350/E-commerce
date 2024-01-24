import mongoose, {Schema} from "mongoose";

const productSchema = new Schema({
    name: {
        type: String,
        required: true,
      },
      description: {
        type: String,
        required: true,
      },
      price: {
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
        type: Number,
        required: true,
        min: 0,
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