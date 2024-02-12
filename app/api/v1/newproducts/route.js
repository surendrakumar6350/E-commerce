import { connectdb } from "@/dbconnection/connect";
import { NextResponse } from "next/server";
import { products } from "@/dbconnection/Schemas/product";




export async function POST(request) {

try {
    await connectdb();
    const product =  await products.findOne({_id: id});
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