import { orders } from "@/dbconnection/Schemas/paymentAndOrders/order";
import { connectdb } from "@/dbconnection/connect";
import { NextResponse } from "next/server";


export async function POST(request) {
    const { id , status} = await request.json();

    try {
        await connectdb();
        if (id && status) {
            const users = await orders.findOne({_id: id})
            users.status = status;
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