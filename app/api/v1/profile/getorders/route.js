import { connectdb } from "@/dbconnection/connect";
import { NextResponse } from "next/server";
import { orders } from "@/dbconnection/Schemas/paymentAndOrders/order";




export async function POST(request) {
    const usercookie = await request.cookies.get('user');
    const userid = usercookie?.value
   
    if(!userid) {
        return NextResponse.json({
            success: false,
            message: "login first"
        })
    }

try {
    await connectdb();
    const product =  await orders.find({ user: userid});
    if(product.length < 1) {
        return NextResponse.json({
            status: 200,
            product : [{no: "no"}]
        })
    }
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