import { connectdb } from "@/dbconnection/connect";
import { NextResponse } from "next/server";
import { signup } from "@/dbconnection/Schemas/signup";



export async function POST(request) {
    const { email, password } = await request.json();

    try {
        await connectdb();
        const find = await signup.findOne({ email: email });
        if (find) {
            const aa = find.password == password;
            if (!aa) {
                return NextResponse.json({
                    success: false,
                    message: "password not match"
                })
            }
            else {
                const response = NextResponse.json({
                    message: "logined",
                    success: true,
                    id: find._id,
                    email: find.email,
                })
                response.cookies.set("user", find._id, {
                    expires: new Date(Date.now() * 160),
                    path: "/"
                })
                return response;
            }

        }
        else {
            return NextResponse.json({
                success: false,
                message: "email not found"
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