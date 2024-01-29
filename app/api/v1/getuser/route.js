import { connectdb } from "@/dbconnection/connect";
import { NextResponse } from "next/server";
import { signup } from "@/dbconnection/Schemas/signup";



export async function POST(request) {
   
    const usercookie = await request.cookies.get('user');
    const userid = usercookie?.value
    if(!userid) {
        return NextResponse.json({
            success: false,
            message: "login first"
        })
    }

    try {
        await connectdb();
        const find = await signup.findOne({ _id: userid });
        if (find) {
       return NextResponse.json({
        success: true,
        message: "user exists",
        user: find
       });

        }
        else {
            return NextResponse.json({
                success: false,
                message: "something wrong with your account",
            })
        }
    }
    catch (error) {
        console.log(error);
        return NextResponse.json({
            success: false,
            message: "api error "
        });
    }
}