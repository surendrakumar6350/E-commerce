import { otp } from "@/dbconnection/Schemas/otp";
import { connectdb } from "@/dbconnection/connect";
import { NextResponse } from "next/server";
import { signup } from "@/dbconnection/Schemas/signup";



export async function POST(request) {
    const { id, userotp }  = await request.json();
    try {
        await connectdb();
        const otpdetails = await otp.findById({ _id: id });

        const expirationTime = new Date().getTime()
        function isOTPExpired(expirationTime) {
            const currentTime = otpdetails.createdAt + 5 * 60 * 1000;
            return currentTime > expirationTime;
        }
        if (isOTPExpired(expirationTime)) {
            if(userotp == otpdetails.otp) {

               
                 return  NextResponse.json({
                    status: 200,
                    message: "otp verified",
                    success: true
                })
    
            }
            else {
                return NextResponse.json({
                    status: 200,
                    message: "invalid otp",
                    success: false
                });
            }
        } else {
           return NextResponse.json({
            status: 200,
            message: "otp has expired",
            success: false
        });
        }

    } catch (error) {
        console.log(error);
        return NextResponse.json({
            status: 400,
            success: false,
            message: "api error"
        });
    }


}