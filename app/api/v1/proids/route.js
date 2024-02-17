import { connectdb } from "@/dbconnection/connect";
import { NextResponse } from "next/server";
import { products } from "@/dbconnection/Schemas/product";




export async function POST(request) {

try {
    return NextResponse.json({
        status: 200,
        success: true,
        productids : [
            "65cfe7a2d2d2dc7d3ea162b3","65cfe5d71e2005607dfc4ec1","65cfe26a645bf555018d5787","65cfea8663d2b49aa7fde2f1","65b1011d1d2ebe4997300003",
            "65cc1db24cd5cf40a8c748a8","65ca0f812fc2e0f4170e432e","65ca0f812fc2e0f4170e432e"
          ]
    })
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