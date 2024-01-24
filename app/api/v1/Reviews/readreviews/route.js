import { connectdb } from "@/dbconnection/connect";
import { NextResponse } from "next/server";
import { reviews } from "@/dbconnection/Schemas/reviews/createreview";



export async function POST(request) {
    const { productId } = await request.json();
  
// send only four reviews at a time
// also add storting to them
if(productId) {
try {
    await connectdb();
  const allReviews =  await reviews.find({productId: productId});
if(allReviews) {
  
    return NextResponse.json({
        status: 200,
        success: true,
        message: "Reviews found",
        allReviews: allReviews
    })
}
else {
    return NextResponse.json({
        status: 400,
        success: false,
        message: "No Review found"
    })
}


}
catch (error) {
    console.log(error);
    return NextResponse.json({
        status: 400,
        success: false,
        message: "api error"
    })
}
}
else {
    return NextResponse.json({
        status: 400,
        success: false,
        message: "There is No such product available"
    })
}
}