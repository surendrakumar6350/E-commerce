import mongoose, {Schema} from "mongoose";

const orderschema = new Schema({
    products: [
      {
        productId: {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'Products',
          required: true,
        },
        quantity: {
          type: Number,
          required: true,
        },
    
      },
    ],
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'signups',
      required: true,
    },
    totalAmount: {
      type: Number,
      required: true,
    },
    payment: {
      paymentMethod: {
        type: String,
        required: true,
      },
      paymentStatus: {
        type: String,
        default: 'Completed',
        enum: ['Pending', 'Completed', 'Failed'],
      },
      razorpay_order_id: {
        type: String,
        required: true,
      },
      razorpay_payment_id: {
        type: String,
        required: true,
      }
    },


    address: {
        firstName : {
            type: String,
            required: true,
          },
          secondName : {
            type: String,
            required: true,
          },
          number: {
            type: Number,
            required: true,
          },
          email: {
            type: String,
            required: true,
          },
        street: {
          type: String,
          required: true,
        },
        state: {
          type: String,
          required: true,
        },
      },
      status: {
        type: String,
        required: true,
      },

    createdAt: {
        type: Date,
        default: Date.now,
  }
});

export const orders = mongoose.models.orders || mongoose.model("orders", orderschema);