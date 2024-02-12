import { connectdb } from "@/dbconnection/connect";
import { NextResponse } from "next/server";
import { products } from "@/dbconnection/Schemas/product";




export async function POST(request) {

try {
    return NextResponse.json({
        status: 200,
        success: true,
        productids : [
            "65ca0f812fc2e0f4170e432e","65ca0f812fc2e0f4170e432e","65ca0f812fc2e0f4170e432e","65ca0f812fc2e0f4170e432e","65ca0f812fc2e0f4170e432e",
            "65ca0f812fc2e0f4170e432e","65ca0f812fc2e0f4170e432e","65ca0f812fc2e0f4170e432e"
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