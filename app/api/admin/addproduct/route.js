import { connectdb } from "@/dbconnection/connect";
import { NextResponse } from "next/server";
import { products } from "@/dbconnection/Schemas/product";



export async function POST(request) {
    const { name, brand, description, rating, category,
        imageUrl, stockQuantity, sale, money,
        cuttingrate, url } = await request.json();

    try {
        await connectdb();
        const index =  await products.find({count: 1});
        if (name) {
            const newproduct = new products({
                  name: name,
                  description: description,
                  money : Number(money),
                  category: category,
                  brand: brand,
                  imageUrl: imageUrl,
                  stockQuantity: stockQuantity,
                  totalmoneyforcart : Number(money),
                  sale: sale,
                  cuttingrate: cuttingrate,
                  count: Number(1),
                  rating: rating,
                  url: url,
                  index: index.length
            });
           
                const productdetails = await newproduct.save();
        
                return  NextResponse.json({
                    message: "product created",
                    success: true,
                    productdetails: productdetails
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