import { NextResponse } from "next/server";
import { orders } from "@/dbconnection/Schemas/paymentAndOrders/order";
import { connectdb } from "@/dbconnection/connect";
import { signup } from "@/dbconnection/Schemas/signup";


export async function POST(request) {
    const nodemailer = require("nodemailer");
    const { payment, items, address, total } = await request.json();
    const usercookie = await request.cookies.get('user');
    const userid = usercookie?.value
  
    try {


        if (userid) {
            const razorpay_order_id = payment.razorpay_order_id;
            const razorpay_payment_id = payment.razorpay_payment_id;


            if (items && address && payment && total) {
                await connectdb();
                const find = await signup.findOne({ _id: userid });
                const neworder = new orders({
                    products: items,
                    user: userid,
                    totalAmount: Number(total),
                    payment: {
                        paymentMethod: "online",
                        razorpay_order_id: razorpay_order_id,
                        razorpay_payment_id: razorpay_payment_id,
                    },
                    address: address,
                    status: "pending"
                });
                const data = await neworder.save();
                const transporter = nodemailer.createTransport({
                    service: "gmail",
                    auth: {
                        user: process.env.GMAIL,
                        pass: process.env.GMAILPASSWORD,
                    },
                });
                async function main() {
                  
                    const info = await transporter.sendMail({
                        from: process.env.GMAIL,
                        to: `${address.email}`,
                        subject: `Thank You for Your Order: ${data._id}`,
                        text: "",
                        html: `<div class="container">   
                        <div class="invoice-container" ref="document" id="html">
                           <table style="width:100%; height:auto;  text-align:center; " BORDER=0 CELLSPACING=0>
                             <thead style="background:#fafafa; padding:8px;">
                             <td style="padding:20px 0 10px 0;">
                             <a href="#" style="text-decoration:none;"
                                 target="_blank"><img alt="Udacity"
                                     border="0" height="27"
                                     src="https://alternate-woo-commerce-landing-page.vercel.app/images/nav_logo.png"
                                     style="display:block; width:152px !important; font-family:'Open+Sans', 'Open Sans', Helvetica, Arial, sans-serif; font-size:22px; line-height:26px; color:#000000; text-transform:uppercase; text-align:center; letter-spacing:1px;"
                                     width="152"></a>
                         </td>
                             </thead>
                             <tbody style="background:#ffff;padding:20px;">
                               <tr>
                                 <td colspan="4" style="padding:20px 0px 0px 20px;text-align:left;font-size: 16px; font-weight: bold;color:#000;">Hello, ${address.firstName} ${address.secondName}</td>
                               </tr>
                               <tr>
                                 <td colspan="4" style="text-align:left;padding:10px 10px 10px 20px;font-size:14px;">Your order details</td>
                               </tr>
                             </tbody>
                           </table>
                           <table style="width:100%; height:auto; background-color:#fff;text-align:center; padding:10px; background:#fafafa">
                             <tbody>
                               <tr style="color:#6c757d; font-size: 20px;">

                                 <td style="border-right: 1.5px dashed  #DCDCDC ;width:33%;font-size:12px;font-weight:700;padding: 0px 0px 10px 0px;">Order No.</td>
                                 <td style="border-right:1.5px dashed  #DCDCDC ;width:33%;font-size:12px;font-weight:700;padding: 0px 0px 10px 0px;">Payment</td>
                                 <td style="width:33%;font-size:12px;font-weight:700;padding: 0px 0px 10px 0px;">Shipping Address</td>
                               </tr>
                               <tr style="background-color:#fff; font-size:12px; color:#262626;">
                                 <td style="border-right:1.5px dashed  #DCDCDC ;width:33% ; font-weight:bold;background: #fafafa;">${payment.razorpay_order_id}</td>
                                 <td style="border-right:1.5px dashed  #DCDCDC ;width:33%; font-weight:bold;background: #fafafa;">ONLINE</td>
                                 <td style="width:33%; font-weight:bold;background: #fafafa;">${address.street}, ${address.state}</td>
                               </tr>
                             </tbody>
                           </table>
                           <table style="width:100%; height:auto; background-color:#fff; margin-top:0px;  padding:20px; font-size:12px; border: 1px solid #ebebeb; border-top:0px;">
                             <thead>
                               <tr style=" color: #6c757d;font-weight: bold; padding: 5px;">
                                 <td colspan="2" style="text-align: left;">PRODUCT INFORMATION</td>
                                 <td style="text-align: center;">SIZE</td>
                                 <td style="padding: 10px;text-align:center;">QUANTITY</td>
                                 <td style="text-align: right;padding: 10px;">PRICE</td>
                               </tr>
                             </thead>
                             <tbody>
                              ${items.map((e)=> {
                                return ( `<tr>
                                    <td style="width:10%; ">
                                      <a href=""><img src=${e.imageUrl} style="width:100px;" /></a>
                                    </td>
                                    <td style="width:20%;margin-left:10px;text-align: center;">${e.name}</td>
                                    <td style="width:20%;padding: 10px; text-align:center;"> ${e.size}</td>
                                    <td style="width:20%;padding: 10px;text-align: center;">${e.count}</td>
                                    <td style="width:30%; ;font-weight: bold;font-size: 14px;">
                                      <table style="width:100%;">
                                        <tr><td style="text-align:end;font-size:13px;">&#x20B9;${e.totalmoneyforcart}</td></tr>
                                      </table>
                                    </td>
                                  </tr>`)
                              })}
                             </tbody>
                           </table>
                           <table style="width:100%; height:auto; background-color:#fff;padding:20px; font-size:12px; border: 1px solid #ebebeb; border-top:0">
                             <tbody>
                               <tr style="padding:20px;color:#000;font-size:15px">
                                 <td style="font-weight: bold;padding:5px 0px">Total</td>
                                 <td style="text-align:right;padding:5px 0px;font-weight: bold;font-size:16px;">&#x20B9;${total}</td>
                               </tr>
                      
                               <tr>
                                 <td colspan="2" style="font-weight:bold;"><span style="color:#c61932;font-weight: bold;">THANK YOU</span> for shipping with us!</td>
                               </tr>
                               <tr>
                                 <td colspan="2" style="font-weight:bold;text-align:left;padding:5px 0px 0px 00px;font-size:14px;"><span></span></td>
                               </tr>
                             </tbody>
                             <tfoot style="padding-top:20px;font-weight: bold;">
                               <tr>
                                 <td style="padding-top:20px;">Need help? Contact us <span style="color:#c61932">  </span></td>
                               </tr>
                             </tfoot>
                           </table>
                      </div>
                      </div>`,
                    });

                    console.log("Message sent: %s", info.messageId);
                   
                }


                await new Promise((resolve, reject) => {
                    main().then(() => {
                        return resolve()
                    })
                        .catch((e) => {
                            return resolve()
                        });
                    setTimeout(() => {
                        resolve()
                    }, 9000)
                })
                return NextResponse.json({
                    success: true,
                    orderId: data._id,
                    address: address,
                    payment: payment,
                    total: total,
                    items: items
                })
            } else {
                return NextResponse.json({
                    success: false,
                    message: "Not authentic payment"
                });
            }
        }
        else {
            return NextResponse.json({
                success: false,
                message: "Order Cancelled!!!    Login First"
            });
        }
    }
    catch (error) {
        console.log(error);
        return NextResponse.json({
            success: false,
            message: "api error"
        })
    }
}