import { NextResponse } from "next/server";
import { orders } from "@/dbconnection/Schemas/paymentAndOrders/order";
import { connectdb } from "@/dbconnection/connect";


export async function POST(request) {
   const { payment, items, address, total} = await request.json();
   const usercookie = await request.cookies.get('user');
   const userid = usercookie?.value

try {


if(userid) {
  const razorpay_order_id = payment.razorpay_order_id;
  const razorpay_payment_id = payment.razorpay_payment_id;
  const pro = items.map((e) => {
    return {
      productId: e._id,
      quantity: e.count,
    }
  })
  
if(items && address && payment && total) {
  await connectdb();
  const neworder = new orders({
    products: pro,
    user: userid,
    totalAmount: Number(total),
    payment: {
      paymentMethod: "online",
      razorpay_order_id: razorpay_order_id,
      razorpay_payment_id: razorpay_payment_id,
    },
    address: address,
    status: "pending"
});
  const data =  await neworder.save();


return NextResponse.json({
    success: true,
    orderId: data._id,
    address: address,
    payment: payment,
    total: total,
    items: items
})
  } else {
    return NextResponse.json({
      success: false,
      message: "Not authentic payment"
    });
  }
}
else {
  return NextResponse.json({
    success: false,
    message: "Order Cancelled!!!    Login First" 
  });
}
}
catch (error) {
  console.log(error);
  return NextResponse.json({
    success: false,
    message: "api error"
  })
}
}