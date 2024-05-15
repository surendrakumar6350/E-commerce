import { otp } from "@/dbconnection/Schemas/otp";
import { connectdb } from "@/dbconnection/connect";
import { NextResponse } from "next/server";
import { signup } from "@/dbconnection/Schemas/signup";



export async function POST(request) {
    const data = await request.json();
    const {email, username, pic} = data;
    await connectdb();
  const user =  await signup.findOne({ email: email});
    if(user) {
        return NextResponse.json({
            success: false,
            message: "Email already exists"
        })
    }
    if(email) {
    function generateOTP() {
        // Generate a random four-digit number
        const otp = Math.floor(1000 + Math.random() * 9000);
        return otp;
    }

    // Example usage
    const myOTP = generateOTP();


    // Display the current time
    const time =  new Date().getTime() 


    const newotp = new otp({
        email,
        otp: Number(myOTP),
        createdAt: Number(time)
    });
    try {
        await connectdb();
        const otpdetails = await newotp.save();


        const nodemailer = require("nodemailer");

        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: "papa.kaa.dinosaur@gmail.com",
                pass: "rokg qrec lnyy upoz",
            },
        });

        // async..await is not allowed in global scope, must use a wrapper
        async function main() {
            console.log("crreating mal");
            console.log(email);
            const info = await transporter.sendMail({
                from: "papa.kaa.dinosaur@gmail.com",
                to: email,
                subject: "Welcome! Verify Your Signup with OTP",
                text: "",
                html: `<head>
                <title>Woo Commerce</title>
                <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
                <meta content="width=device-width, initial-scale=1.0" name="viewport">
                <meta content="IE=edge" http-equiv="X-UA-Compatible">
                <link href="https://fonts.googleapis.com/css?family=Open+Sans:600,400,300" rel="stylesheet" type="text/css">
                <link rel="shortcut icon" type="image/x-icon" href="https://cdn-icons-png.flaticon.com/512/12075/12075549.png">
                <style type="text/css">
                    html,
                    body {
                        background-color: #fafbfc;
                    }
                    img {
                        display: block;
                    }
                    .ReadMsgBody {
                        width: 100%;
                    }
                    .ExternalClass {
                        width: 100%;
                    }
                    * {
                        -webkit-text-size-adjust: none;
                    }
                    .whiteLinks a:link,
                    .whiteLinks a:visited {
                        color: #ffffff !important;
                    }
                    .appleLinksGrey a {
                        color: #b7bdc1 !important;
                        text-decoration: none !important;
                    }
                    table {
                        border-collapse: collapse;
                    }
                    .preheader {
                        font-size: 1px;
                        line-height: 1px;
                        display: none !important;
                        mso-hide: all;
                    }
                    #maincontent td {
                        color: #525C65;
                    }
                </style>
            </head>
            <body bgcolor="#fafbfc" style="Margin:0; padding:0;" yahoo="fix">
                <table border="0" cellpadding="0" cellspacing="0" width="100%">
                    <tbody>
                        <tr>
                            <td style="background-color:#fafbfc">
                                <center bgcolor="#fafbfc"
                                    style="width:100%;background-color:#fafbfc;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;">
                                    <div id="maincontent" style="max-width:620px; font-size:0;margin:0 auto;">
                                        <div class="preheader"
                                            style="font-size: 1px; line-height:1px; display: none!important; mso-hide:all;">
                                            One more step to get started
                                        </div>
                                        <table border="0" cellpadding="0" cellspacing="0" style="width:100%;">
                                            <tbody>
                                                <tr>
                                                    <td>
                                                        <table border="0" cellpadding="0" cellspacing="0" style="width:100%;">
                                                            <tbody>
                                                                <tr>
                                                                    <td align="center" style="padding-bottom:20px;">
                                                                    <table border="0" cellpadding="0" cellspacing="0"
                                                                    style="font-family:'Open+Sans', 'Open Sans', Helvetica, Arial, sans-serif; font-size:13px; line-height:18px; color:#00C0EA; text-align:center; width:152px;">
                                                                    <tbody>
                                                                        <tr>
                                                                            <td style="padding:20px 0 10px 0;">
                                                                                <a href="#" style="text-decoration:none;"
                                                                                    target="_blank"><img alt="Udacity"
                                                                                        border="0" height="27"
                                                                                        src="https://alternate-woo-commerce-landing-page.vercel.app/images/nav_logo.png"
                                                                                        style="display:block; width:152px !important; font-family:'Open+Sans', 'Open Sans', Helvetica, Arial, sans-serif; font-size:22px; line-height:26px; color:#000000; text-transform:uppercase; text-align:center; letter-spacing:1px;"
                                                                                        width="152"></a>
                                                                            </td>
                                                                        </tr>
                                                                    </tbody>
                                                                </table>
                                                                    </td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <table border="0" cellpadding="0" cellspacing="0" style="width:100%;">
                                                            <tbody>
                                                                <tr>
                                                                    <td bgcolor="#fafbfc" style="width:7px; font-size:1px;">&nbsp;
                                                                    </td>
                                                                    <td bgcolor="#f5f6f7" style="width:1px; font-size:1px;">&nbsp;
                                                                    </td>
                                                                    <td bgcolor="#f0f2f3" style="width:1px; font-size:1px;">&nbsp;
                                                                    </td>
                                                                    <td bgcolor="#edeef1" style="width:1px; font-size:1px;">&nbsp;
                                                                    </td>
                                                                    <td bgcolor="#ffffff">
                                                                        <table border="0" cellpadding="0" cellspacing="0"
                                                                            style="width:100%;">
                                                                            <tbody>
                                                                                <tr>
                                                                                    <td
                                                                                        style="text-align:center; padding:40px 40px 40px 40px; border-top:3px solid #02b3e4;">
            
                                                                                        <div
                                                                                            style="display:inline-block; width:100%; max-width:520px;">
                                                                                            <table border="0" cellpadding="0"
                                                                                                cellspacing="0"
                                                                                                style="font-family:'Open+Sans', 'Open Sans', Helvetica, Arial, sans-serif; font-size:14px; line-height:24px; color:#525C65; text-align:left; width:100%;">
                                                                                                <tbody>
                                                                                                    <tr>
                                                                                                        <td>
                                                                                                            <p
                                                                                                                style="Margin:0; font-size:18px; line-height:23px; color:#102231; font-weight:bold;">
                                                                                                                <strong>
                                                                                                                    Hi
                                                                                                                    ${username},</strong><br><br>
                                                                                                            </p>
                                                                                                        </td>
                                                                                                    </tr>
                                                                                                    <tr>
                    
                                                                                                        <td>
                                                                                                            To complete your sign
                                                                                                            up, please verify your
                                                                                                            email: <br><br>
                                                                                                        </td>
                                                                                                    </tr>
                                                                                                    <tr>
                                                                                                        <td align="center"
                                                                                                            style="padding:15px 0 40px 0; border-bottom:1px solid #f3f6f9; ">
                                                                                                            <table border="0"
                                                                                                                cellpadding="0"
                                                                                                                cellspacing="0"
                                                                                                                style="border-collapse:separate !important; border-radius:15px; width:210px;">
                                                                                                                <tbody>
                                                                                                                    <tr>
                                                                                                                        <td align="center"
                                                                                                                            valign="top">
            
                                                                                                                            <a href=""
                                                                                                                                target="_blank"
                                                                                                                                style="background-color:#01b3e3; border-collapse:separate !important; border-top:10px solid #01b3e3; border-bottom:10px solid #01b3e3; border-right:45px solid #01b3e3; border-left:45px solid #01b3e3; border-radius:4px; color:#ffffff; display:inline-block; font-family:'Open+Sans','Open Sans',Helvetica, Arial, sans-serif; font-size:13px; font-weight:bold; text-align:center; text-decoration:none; letter-spacing:2px;">${myOTP}</a>
            
                                                                                                                        </td>
                                                                                                                    </tr>
                                                                                                                </tbody>
                                                                                                            </table>
                                                                                                        </td>
                                                                                                    </tr>
                                                                                                    <tr>
                                                                                                        <td
                                                                                                            style="padding-top:30px;">
                                                                                                            Thank you for signing up
                                                                                                            with Woocommerce! To
                                                                                                            ensure the security of
                                                                                                            your account, we need to
                                                                                                            verify your email
                                                                                                            address
                                                                                                        </td>
                                                                                                    </tr>
            
                                                                                                    <tr>
                                                                                                        <td
                                                                                                            style="font:14px/16px Arial, Helvetica, sans-serif; color:#363636; padding:0 0 14px;">
                                                                                                            Cheers,
                                                                                                        </td>
                                                                                                    </tr>
                                                                                                    <tr>
                                                                                                        <td
                                                                                                            style="font:bold 14px/16px Arial, Helvetica, sans-serif; color:#363636; padding:0 0 7px;">
                                                                                                            The Woocommerce Team
                                                                                                        </td>
                                                                                                    </tr>
            
                                                                                                </tbody>
                                                                                            </table>
                                                                                        </div>
                                                                                    </td>
                                                                                </tr>
                                                                                <tr>
                                                                                    <td bgcolor="#e0e2e5"
                                                                                        style="height:1px; width:100%; line-height:1px; font-size:0;">
                                                                                        &nbsp;</td>
                                                                                </tr>
                                                                                <tr>
                                                                                    <td bgcolor="#e0e2e4"
                                                                                        style="height:1px; width:100%; line-height:1px; font-size:0;">
                                                                                        &nbsp;</td>
                                                                                </tr>
                                                                                <tr>
                                                                                    <td bgcolor="#e8ebed"
                                                                                        style="height:1px; width:100%; line-height:1px; font-size:0;">
                                                                                        &nbsp;</td>
                                                                                </tr>
                                                                                <tr>
                                                                                    <td bgcolor="#f1f3f6"
                                                                                        style="height:1px; width:100%; line-height:1px; font-size:0;">
                                                                                        &nbsp;</td>
                                                                                </tr>
                                                                            </tbody>
                                                                        </table>
                                                                    </td>
                                                                    <td bgcolor="#edeef1" style="width:1px; font-size:1px;">&nbsp;
                                                                    </td>
                                                                    <td bgcolor="#f0f2f3" style="width:1px; font-size:1px;">&nbsp;
                                                                    </td>
                                                                    <td bgcolor="#f5f6f7" style="width:1px; font-size:1px;">&nbsp;
                                                                    </td>
                                                                    <td bgcolor="#fafbfc" style="width:7px; font-size:1px;">&nbsp;
                                                                    </td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td style="text-align:center; padding:0;">
            
                                                        <div
                                                            style="display:inline-block; width:100%; max-width:520px; vertical-align:top;">
                                                            <table border="0" cellpadding="0" cellspacing="0" style="width:100%;">
                                                                <tbody>
                                                                    <tr>
                                                                        <td align="center"
                                                                            style="padding:30px 0; border-bottom:1px solid #e5ebef;">
                                                                            <table border="0" cellpadding="0" cellspacing="0"
                                                                                style="width:265px;">
                                                                                <tbody>
                                                                                    <tr>
                                                                                        <td align="center">
                                                                                            <img alt="IOS" border="0" height="44"
                                                                                                src="https://s3-us-west-2.amazonaws.com/udacity-email/Footer/ios-btn.gif"
                                                                                                style="display:block; width:120px!important;"
                                                                                                width="120"></a>
                                                                                        </td>
                                                                                        <td align="center">
                                                                                            <img alt="Android" border="0"
                                                                                                height="44"
                                                                                                src="https://s3-us-west-2.amazonaws.com/udacity-email/Footer/android-btn.gif"
                                                                                                style="display:block; width:120px!important;"
                                                                                                width="120"></a>
                                                                                        </td>
                                                                                    </tr>
                                                                                </tbody>
                                                                            </table>
                                                                        </td>
                                                                    </tr>
                                                                </tbody>
                                                            </table>
                                                        </div>
            
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td align="center" style="padding:30px 0 20px 0;">
            
                                                        <table border="0" cellpadding="0" cellspacing="0" style="width:220px;">
                                                            <tbody>
                                                                <tr>
                                                                    <td align="center">
                                                                        <a href="" target="_blank"><img alt="Twitter" border="0"
                                                                                height="26"
                                                                                src="https://s3-us-west-2.amazonaws.com/udacity-email/Footer/twitter.jpg"
                                                                                style="display:block; width:26px!important; height:26px!important;"
                                                                                width="26"></a>
                                                                    </td>
                                                                    <td align="center">
                                                                        <a href="" target="_blank"><img alt="Facebook" border="0"
                                                                                height="26"
                                                                                src="https://s3-us-west-2.amazonaws.com/udacity-email/Footer/facebook.jpg"
                                                                                style="display:block; width:26px!important; height:26px!important;"
                                                                                width="26"></a>
                                                                    </td>
                                                                    <td align="center">
                                                                        <a href="" target="_blank"><img alt="Google" border="0"
                                                                                height="26"
                                                                                src="https://s3-us-west-2.amazonaws.com/udacity-email/Footer/google.jpg"
                                                                                style="display:block; width:28px!important; height:26px!important;"
                                                                                width="28"></a>
                                                                    </td>
                                                                    <td align="center">
                                                                        <a href="" target="_blank"><img alt="Linkedin" border="0"
                                                                                height="26"
                                                                                src="https://s3-us-west-2.amazonaws.com/udacity-email/Footer/linkedin.jpg"
                                                                                style="display:block; width:26px!important; height:26px!important;"
                                                                                width="26"></a>
                                                                    </td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
            
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td align="center" style="padding-bottom:40px;">
                                                        <table border="0" cellpadding="0" cellspacing="0"
                                                            style="font-family:'Open+Sans', 'Open Sans', Helvetica, Arial, sans-serif; font-size:12px; line-height:18px;  text-align:center; width:auto;">
                                                            <tbody>
                                                                <tr>
                                                                    <td style="color:#b7bdc1;">
            
                                                                        <p style="Margin:0;"><span class="appleLinksGrey">2465
                                                                                Latham St.</span> &nbsp;•&nbsp; <span
                                                                                class="appleLinksGrey">Mountain View, CA
                                                                                94040</span></p>
                                                                    </td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
            
            
            
                                </center>
                            </td>
                        </tr>
                    </tbody>
                </table>
            
            
            
            </body>`,
            });

            console.log("Message sent: %s", info.messageId);
            console.log(info.error);
        }

console.log("ho jaya klaan");
        await new Promise((resolve, reject) => {
            main().then(() => resolve())
                .catch(() => resolve());
            setTimeout(() => {
                resolve()
            }, 9000)
        })





        return NextResponse.json({
            status: 200,
            success: true,
            otpid: otpdetails._id,
            message: `OTP sent to ${email}`
        });
    } catch (error) {
        console.log(error);
        return NextResponse.json({
            status: 400,
            message: "api error",
            success: false,
        });
    }
    }
    else {
        return NextResponse.json({
            status: 400,
            message: "Error",
            success: false
        });
    }

}