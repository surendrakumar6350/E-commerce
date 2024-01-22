import { otp } from "@/dbconnection/Schemas/otp";
import { connectdb } from "@/dbconnection/connect";
import { NextResponse } from "next/server";
import { signup } from "@/dbconnection/Schemas/signup";



export async function POST(request) {
    const { email } = await request.json();

    await connectdb();
  const user =  await signup.findOne({ email: email});
  console.log(user)
    if(user) {
        return NextResponse.json({
            success: false,
            message: "Email already exists"
        })
    }
    if(email) {
    function generateOTP() {
        // Generate a random four-digit number
        const otp = Math.floor(1000 + Math.random() * 9000);
        return otp;
    }

    // Example usage
    const myOTP = generateOTP();


    // Display the current time
    const time =  new Date().getTime() 


    const newotp = new otp({
        email,
        otp: Number(myOTP),
        createdAt: Number(time)
    });
    try {
        await connectdb();
        const otpdetails = await newotp.save();


        const nodemailer = require("nodemailer");

        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: "papa.kaa.dinosaur@gmail.com",
                pass: "jele zgqt akkd goya",
            },
        });

        // async..await is not allowed in global scope, must use a wrapper
        async function main() {
            const info = await transporter.sendMail({
                from: 'papa.kaa.dinosaur@gmail.com',
                to: email,
                subject: "Hello ✔",
                text: "Hello world?",
                html: `<b>Hello world?    ${myOTP}</b>`,
            });

            console.log("Message sent: %s", info.messageId);
        }


        await new Promise((resolve, reject) => {
            main().then(() => resolve())
                .catch(() => resolve());
            setTimeout(() => {
                resolve()
            }, 9000)
        })





        return NextResponse.json({
            status: 200,
            success: true,
            otpid: otpdetails._id,
            message: `OTP sent to ${email}`
        });
    } catch (error) {
        console.log(error);
        return NextResponse.json({
            status: 400,
            message: "api error",
            success: false,
        });
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