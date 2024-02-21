import { connectdb } from "@/dbconnection/connect";
import { NextResponse } from "next/server";
import { products } from "@/dbconnection/Schemas/product";




export async function POST(request) {

try {
    await connectdb();
    const product =  await products.find({count: 1});
    if(product) {
       let len = product.length;
       let newarr = [];
       let filter = [len - 0, len - 1, len - 2, len - 3];
       filter.map((a)=> {
        product.map((e)=> {
            if(e.index == a) {
                newarr = [...newarr, e]
            }
           })
       })

        return NextResponse.json({
            status: 200,
            success: true,
            product: newarr
        })
    } else { 
        return NextResponse.json({
            status: 400,
            message: "Error",
            success: false
        })
    }
}
catch (err) {
    console.log(err);
    return NextResponse.json({
        status: 400,
        message: "Error",
        success: false
    })
}
    
  

}