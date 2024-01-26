import { NextResponse } from "next/server";
import Razorpay from "razorpay";



export async function POST(request) {
    const {money} = await request.json();
    console.log("hiii")
   const instance = new Razorpay({
        key_id: 'rzp_test_VH5pvgVxsaOaQm',
        key_secret: 'Iunf89HA0XFmQRtWQceZiEDm',
      });
    const options = {
        amount: Number(money * 100),
        currency: "INR",
      };
      const order = await instance.orders.create(options);
    console.log(order);
      return NextResponse.json({
        success: true,
        order,
      });
}