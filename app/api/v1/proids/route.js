import { connectdb } from "@/dbconnection/connect";
import { NextResponse } from "next/server";
import { products } from "@/dbconnection/Schemas/product";




export async function POST(request) {

try {
    return NextResponse.json({
        status: 200,
        success: true,
        productids : [
            "65c6db47f391133bbbf29375","65b1011d1d2ebe4997300003","65c644b675cd37e839398e27","65c644b675cd37e839398e27","65c644b675cd37e839398e27",
            "65c6db47f391133bbbf29375","65b1011d1d2ebe4997300003","65b1011d1d2ebe4997300003"
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