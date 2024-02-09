import { connectdb } from "@/dbconnection/connect";
import { NextResponse } from "next/server";
import { signup } from "@/dbconnection/Schemas/signup";



export async function POST(request) {
    const { id } = await request.json();

    try {
        await connectdb();
        if (id) {
            const users = await signup.deleteOne({_id: id})
            
                return  NextResponse.json({
                    message: "deleted succesfully",
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