import { connectdb } from "@/dbconnection/connect";
import { NextResponse } from "next/server";
import { products } from "@/dbconnection/Schemas/product";



export async function POST(request) {
    const { id } = await request.json();

    try {
        await connectdb();
        
        if (id) {
            const product = await products.findByIdAndDelete({ _id: id})
                return  NextResponse.json({
                    message: "product deleted",
                    success: true,
                   products: product
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