import { otp } from "@/dbconnection/Schemas/otp";
import { connectdb } from "@/dbconnection/connect";
import { NextResponse } from "next/server";
import { signup } from "@/dbconnection/Schemas/signup";



export async function POST(request) {
    const data  = await request.json();
    const { id, userotp } = data;
    const {username, email, password, pic} = data[0];
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

                const newUser = new signup({
                    username,
                    email,
                    password,
                    pic,
                    role: "user"
                });
                
                
                    await newUser.save();


                return NextResponse.json({
                    status: 200,
                    message: "otp verified",
                    success: true
                });
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
            message: "api error"
        });
    }


}