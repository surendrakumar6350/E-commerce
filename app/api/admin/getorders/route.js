import { connectdb } from "@/dbconnection/connect";
import { NextResponse } from "next/server";
import { orders } from "@/dbconnection/Schemas/paymentAndOrders/order";




export async function POST(request) {
 
try {
    await connectdb();
    const product =  await orders.find({ __v: 0});
    if(product) {
        return NextResponse.json({
            status: 200,
            success: true,
            product: product
        })
    } else { 
        return NextResponse.json({
            status: 400,
            message: "Error",
            success: false
        })
    }
}
catch (err) {
    console.log(err);
    return NextResponse.json({
        status: 400,
        message: "Error",
        success: false
    })
}
    
  

}