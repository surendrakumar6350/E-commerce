import { connectdb } from "@/dbconnection/connect";
import { NextResponse } from "next/server";
import { reviews } from "@/dbconnection/Schemas/reviews/createreview";
import { signup } from "@/dbconnection/Schemas/signup";


export async function POST(request) {
    const { rating, review, productId } = await request.json();
    const usercookie = await request.cookies.get('user');
    const userid = usercookie?.value

if(userid && rating && review) {
try {
    await connectdb();
  const user =  await signup.findOne({_id: userid});
if(user) {

   const newreview = new reviews({
    userName: user.username,
    productId,
    rating: Number(rating),
    reviewContent: review,
    createdAt: new Date(Date.now()),
});
  const data =  await newreview.save();



    return NextResponse.json({
        status: 200,
        success: true,
        message: "Review Submitted Successfully",
        data: data
        
    })
}
else {
    return NextResponse.json({
        status: 400,
        success: false,
        message: "User not found"
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
        message: "Please fill all the fields"
    })
}
}