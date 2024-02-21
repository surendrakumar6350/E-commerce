import { connectdb } from "@/dbconnection/connect";
import { NextResponse } from "next/server";
import { products } from "@/dbconnection/Schemas/product";




export async function POST(request) {

try {
    return NextResponse.json({
        status: 200,
        success: true,
        productids : [
            "65cc1db24cd5cf40a8c748a8","65cfe26a645bf555018d5787","65cfe5d71e2005607dfc4ec1","65cfe7a2d2d2dc7d3ea162b3","65cfea8663d2b49aa7fde2f1",
            "65d58f324f72e4724859d033","65d590524f72e4724859d037","65d5924d4f72e4724859d03b"
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