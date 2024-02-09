import { connectdb } from "@/dbconnection/connect";
import { NextResponse } from "next/server";
import { signup } from "@/dbconnection/Schemas/signup";



export async function POST(request) {

    try {
        await connectdb();
        
        if (true) {
            const users = await signup.find({__v: 0})
                return  NextResponse.json({
                    message: "users finded successfully",
                    success: true,
                   users: users
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