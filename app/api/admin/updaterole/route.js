import { connectdb } from "@/dbconnection/connect";
import { NextResponse } from "next/server";
import { signup } from "@/dbconnection/Schemas/signup";



export async function POST(request) {
    const { id , role} = await request.json();

    try {
        await connectdb();
        if (id && role) {
            const users = await signup.findOne({_id: id})
            users.role = role;
            users.save();
                return  NextResponse.json({
                    message: "updated succesfully",
                    success: true,
                   users: users
                })
        }
        else {
            return NextResponse.json({
                success: false,
                message: "all fields are required"
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