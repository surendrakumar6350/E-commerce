import { otp } from "@/dbconnection/Schemas/otp";
import { connectdb } from "@/dbconnection/connect";
import { NextResponse } from "next/server";
import { signup } from "@/dbconnection/Schemas/signup";



export async function POST(request) {
    const { email, password } = await request.json();

    await connectdb();
  const user =  await signup.findOne({ email: email});
    if(!user) {
        return NextResponse.json({
            success: false,
            message: "Email Not found"
        })
    }
    if(email) {
      try{
        user.password = password;
        await user.save();
        return  NextResponse.json({
            message: "updated succesfully",
            success: true,
           user: user
        })
      }
catch (error) {
    console.log(error);
    return NextResponse.json({
        status: 400,
        success: false,
        message: "api error "
    })
}
    
    }
    else {
        return NextResponse.json({
            status: 400,
            message: "Error",
            success: false
        });
    }
}