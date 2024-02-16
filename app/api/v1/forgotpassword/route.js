import { otp } from "@/dbconnection/Schemas/otp";
import { connectdb } from "@/dbconnection/connect";
import { NextResponse } from "next/server";
import { signup } from "@/dbconnection/Schemas/signup";



export async function POST(request) {
    const { email } = await request.json();

    await connectdb();
  const user =  await signup.findOne({ email: email});
    if(!user) {
        return NextResponse.json({
            success: false,
            message: "Email Not found"
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
                user: "woocommerce.vercel@gmail.com",
                pass: "ljhw ubqc nkfl ifyq",
            },
        });

        // async..await is not allowed in global scope, must use a wrapper
        async function main() {
            const info = await transporter.sendMail({
                from: 'woocommerce.vercel@gmail.com',
                to: email,
                subject: "Password Reset Request: Action Required",
                text: "",
                html: `<!doctype html>
                <html xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml"
                    xmlns:o="urn:schemas-microsoft-com:office:office">
                
                <head>
                    <meta charset="UTF-8">
                    <meta http-equiv="X-UA-Compatible" content="IE=edge">
                    <link rel="shortcut icon" type="image/x-icon" href="https://cdn-icons-png.flaticon.com/512/12075/12075549.png">
                    <meta name="viewport" content="width=device-width, initial-scale=1">
                    <title>Reset Your Password</title>
                    <!--[if !mso]>
                      <!-- -->
                    <link href='https://fonts.googleapis.com/css?family=Asap:400,400italic,700,700italic' rel='stylesheet'
                        type='text/css'>
                    <!--<![endif]-->
                    <style type="text/css">
                        @media only screen and (min-width:768px) {
                            .templateContainer {
                                width: 600px !important;
                            }
                
                        }
                
                        @media only screen and (max-width: 480px) {
                
                            body,
                            table,
                            td,
                            p,
                            a,
                            li,
                            blockquote {
                                -webkit-text-size-adjust: none !important;
                            }
                
                        }
                
                        @media only screen and (max-width: 480px) {
                            body {
                                width: 100% !important;
                                min-width: 100% !important;
                            }
                
                        }
                
                        @media only screen and (max-width: 480px) {
                            #bodyCell {
                                padding-top: 10px !important;
                            }
                
                        }
                
                        @media only screen and (max-width: 480px) {
                            .mcnImage {
                                width: 100% !important;
                            }
                
                        }
                
                        @media only screen and (max-width: 480px) {
                
                            .mcnCaptionTopContent,
                            .mcnCaptionBottomContent,
                            .mcnTextContentContainer,
                            .mcnBoxedTextContentContainer,
                            .mcnImageGroupContentContainer,
                            .mcnCaptionLeftTextContentContainer,
                            .mcnCaptionRightTextContentContainer,
                            .mcnCaptionLeftImageContentContainer,
                            .mcnCaptionRightImageContentContainer,
                            .mcnImageCardLeftTextContentContainer,
                            .mcnImageCardRightTextContentContainer {
                                max-width: 100% !important;
                                width: 100% !important;
                            }
                
                        }
                
                        @media only screen and (max-width: 480px) {
                            .mcnBoxedTextContentContainer {
                                min-width: 100% !important;
                            }
                
                        }
                
                        @media only screen and (max-width: 480px) {
                            .mcnImageGroupContent {
                                padding: 9px !important;
                            }
                
                        }
                
                        @media only screen and (max-width: 480px) {
                
                            .mcnCaptionLeftContentOuter .mcnTextContent,
                            .mcnCaptionRightContentOuter .mcnTextContent {
                                padding-top: 9px !important;
                            }
                
                        }
                
                        @media only screen and (max-width: 480px) {
                
                            .mcnImageCardTopImageContent,
                            .mcnCaptionBlockInner .mcnCaptionTopContent:last-child .mcnTextContent {
                                padding-top: 18px !important;
                            }
                
                        }
                
                        @media only screen and (max-width: 480px) {
                            .mcnImageCardBottomImageContent {
                                padding-bottom: 9px !important;
                            }
                
                        }
                
                        @media only screen and (max-width: 480px) {
                            .mcnImageGroupBlockInner {
                                padding-top: 0 !important;
                                padding-bottom: 0 !important;
                            }
                
                        }
                
                        @media only screen and (max-width: 480px) {
                            .mcnImageGroupBlockOuter {
                                padding-top: 9px !important;
                                padding-bottom: 9px !important;
                            }
                
                        }
                
                        @media only screen and (max-width: 480px) {
                
                            .mcnTextContent,
                            .mcnBoxedTextContentColumn {
                                padding-right: 18px !important;
                                padding-left: 18px !important;
                            }
                
                        }
                
                        @media only screen and (max-width: 480px) {
                
                            .mcnImageCardLeftImageContent,
                            .mcnImageCardRightImageContent {
                                padding-right: 18px !important;
                                padding-bottom: 0 !important;
                                padding-left: 18px !important;
                            }
                
                        }
                
                        @media only screen and (max-width: 480px) {
                            .mcpreview-image-uploader {
                                display: none !important;
                                width: 100% !important;
                            }
                
                        }
                
                        @media only screen and (max-width: 480px) {
                
                
                            h1 {
                                /*@editable*/
                                font-size: 20px !important;
                                /*@editable*/
                                line-height: 150% !important;
                            }
                
                        }
                
                        @media only screen and (max-width: 480px) {
                
                
                            h2 {
                                /*@editable*/
                                font-size: 20px !important;
                                /*@editable*/
                                line-height: 150% !important;
                            }
                
                        }
                
                        @media only screen and (max-width: 480px) {
                
                
                            h3 {
                                /*@editable*/
                                font-size: 18px !important;
                                /*@editable*/
                                line-height: 150% !important;
                            }
                
                        }
                
                        @media only screen and (max-width: 480px) {
                
                            h4 {
                                /*@editable*/
                                font-size: 16px !important;
                                /*@editable*/
                                line-height: 150% !important;
                            }
                
                        }
                
                        @media only screen and (max-width: 480px) {
                
                
                            .mcnBoxedTextContentContainer .mcnTextContent,
                            .mcnBoxedTextContentContainer .mcnTextContent p {
                                /*@editable*/
                                font-size: 16px !important;
                                /*@editable*/
                                line-height: 150% !important;
                            }
                
                        }
                
                        @media only screen and (max-width: 480px) {
                
                            #templatePreheader {
                                /*@editable*/
                                display: block !important;
                            }
                
                        }
                
                        @media only screen and (max-width: 480px) {
                
                            #templatePreheader .mcnTextContent,
                            #templatePreheader .mcnTextContent p {
                                /*@editable*/
                                font-size: 12px !important;
                                /*@editable*/
                                line-height: 150% !important;
                            }
                
                        }
                
                        @media only screen and (max-width: 480px) {
                
                
                            #templateHeader .mcnTextContent,
                            #templateHeader .mcnTextContent p {
                                /*@editable*/
                                font-size: 16px !important;
                                /*@editable*/
                                line-height: 150% !important;
                            }
                
                        }
                
                        @media only screen and (max-width: 480px) {
                
                            #templateBody .mcnTextContent,
                            #templateBody .mcnTextContent p {
                                /*@editable*/
                                font-size: 16px !important;
                                /*@editable*/
                                line-height: 150% !important;
                            }
                
                        }
                
                        @media only screen and (max-width: 480px) {
                
                            #templateFooter .mcnTextContent,
                            #templateFooter .mcnTextContent p {
                                /*@editable*/
                                font-size: 12px !important;
                                /*@editable*/
                                line-height: 150% !important;
                            }
                
                        }
                    </style>
                </head>
                
                <body style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;
                 background-color: #fed149; height: 100%; margin: 0; padding: 0; width: 100%">
                    <center>
                        <table align="center" border="0" cellpadding="0" cellspacing="0" height="100%" id="bodyTable" style="border-collapse: collapse; mso-table-lspace: 0;
                 mso-table-rspace: 0; -ms-text-size-adjust: 100%; -webkit-text-size-adjust:
                 100%; background-color: #fed149; height: 100%; margin: 0; padding: 0; width:
                 100%" width="100%">
                            <tr>
                                <td align="center" id="bodyCell" style="mso-line-height-rule: exactly;
                 -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; border-top: 0;
                 height: 100%; margin: 0; padding: 0; width: 100%" valign="top">
                                    <!-- BEGIN TEMPLATE // -->
                                    <!--[if gte mso 9]>
                              <table align="center" border="0" cellspacing="0" cellpadding="0" width="600" style="width:600px;">
                                <tr>
                                  <td align="center" valign="top" width="600" style="width:600px;">
                                  <![endif]-->
                                    <table border="0" cellpadding="0" cellspacing="0" class="templateContainer" style="border-collapse: collapse; mso-table-lspace: 0; mso-table-rspace: 0;
                 -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; max-width:
                 600px; border: 0" width="100%">
                                        <tr>
                                            <td id="templatePreheader" style="mso-line-height-rule: exactly;
                 -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; background-color: #fed149;
                 border-top: 0; border-bottom: 0; padding-top: 16px; padding-bottom: 8px" valign="top">
                                                <table border="0" cellpadding="0" cellspacing="0" class="mcnTextBlock" style="border-collapse: collapse; mso-table-lspace: 0;
                 mso-table-rspace: 0; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;
                 min-width:100%;" width="100%">
                                                    <tbody class="mcnTextBlockOuter">
                                                        <tr>
                                                            <td class="mcnTextBlockInner" style="mso-line-height-rule: exactly;
                 -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%" valign="top">
                                                                <table align="left" border="0" cellpadding="0" cellspacing="0"
                                                                    class="mcnTextContentContainer" style="border-collapse: collapse; mso-table-lspace: 0;
                 mso-table-rspace: 0; -ms-text-size-adjust: 100%; -webkit-text-size-adjust:
                 100%; min-width:100%;" width="100%">
                                                                    <tbody>
                                                                        <tr>
                                                                            <td class="mcnTextContent" style='mso-line-height-rule: exactly;
                 -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; word-break: break-word;
                 color: #2a2a2a; font-family: "Asap", Helvetica, sans-serif; font-size: 12px;
                 line-height: 150%; text-align: left; padding-top:9px; padding-right: 18px;
                 padding-bottom: 9px; padding-left: 18px;' valign="top">
                                                                                <a href="" style="mso-line-height-rule: exactly;
                 -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; color: #2a2a2a;
                 font-weight: normal; text-decoration: none" target="_blank" title="Lingo is the
                 best way to organize, share and use all your visual assets in one place -
                 all on your desktop.">
                                                                                   
                                                                                </a>
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
                                            <td id="templateHeader" style="mso-line-height-rule: exactly;
                 -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; background-color: #f7f7ff;
                 border-top: 0; border-bottom: 0; padding-top: 16px; padding-bottom: 0" valign="top">
                                                <table border="0" cellpadding="0" cellspacing="0" class="mcnImageBlock" style="border-collapse: collapse; mso-table-lspace: 0; mso-table-rspace: 0;
                 -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;
                 min-width:100%;" width="100%">
                                                    <tbody class="mcnImageBlockOuter">
                                                        <tr>
                                                            <td class="mcnImageBlockInner" style="mso-line-height-rule: exactly;
                 -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; padding:0px" valign="top">
                                                                <table align="left" border="0" cellpadding="0" cellspacing="0"
                                                                    class="mcnImageContentContainer" style="border-collapse: collapse; mso-table-lspace: 0;
                 mso-table-rspace: 0; -ms-text-size-adjust: 100%; -webkit-text-size-adjust:
                 100%; min-width:100%;" width="100%">
                                                                    <tbody>
                                                                        <tr>
                                                                            <td class="mcnImageContent" style="mso-line-height-rule: exactly;
                 -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; padding-right: 0px;
                 padding-left: 0px; padding-top: 0; padding-bottom: 0; text-align:center;" valign="top">
                                                                                <a class="" href="https://www.lingoapp.com" style="mso-line-height-rule:
                 exactly; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; color:
                 #f57153; font-weight: normal; text-decoration: none" target="_blank" title="">
                                                                                    <a class="" href="https://www.lingoapp.com/" style="mso-line-height-rule:
                 exactly; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; color:
                 #f57153; font-weight: normal; text-decoration: none" target="_blank" title="">
                                                                                        <img align="center" alt="Forgot your password?"
                                                                                            class="mcnImage"
                                                                                            src="https://static.lingoapp.com/assets/images/email/il-password-reset@2x.png"
                                                                                            style="-ms-interpolation-mode: bicubic; border: 0; height: auto; outline: none;
                 text-decoration: none; vertical-align: bottom; max-width:1200px; padding-bottom:
                 0; display: inline !important; vertical-align: bottom;" width="600"></img>
                                                                                    </a>
                                                                                </a>
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
                                            <td id="templateBody" style="mso-line-height-rule: exactly;
                 -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; background-color: #f7f7ff;
                 border-top: 0; border-bottom: 0; padding-top: 0; padding-bottom: 0" valign="top">
                                                <table border="0" cellpadding="0" cellspacing="0" class="mcnTextBlock" style="border-collapse: collapse; mso-table-lspace: 0; mso-table-rspace: 0;
                 -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; min-width:100%;" width="100%">
                                                    <tbody class="mcnTextBlockOuter">
                                                        <tr>
                                                            <td class="mcnTextBlockInner" style="mso-line-height-rule: exactly;
                 -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%" valign="top">
                                                                <table align="left" border="0" cellpadding="0" cellspacing="0"
                                                                    class="mcnTextContentContainer" style="border-collapse: collapse; mso-table-lspace: 0;
                 mso-table-rspace: 0; -ms-text-size-adjust: 100%; -webkit-text-size-adjust:
                 100%; min-width:100%;" width="100%">
                                                                    <tbody>
                                                                        <tr>
                                                                            <td class="mcnTextContent" style='mso-line-height-rule: exactly;
                 -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; word-break: break-word;
                 color: #2a2a2a; font-family: "Asap", Helvetica, sans-serif; font-size: 16px;
                 line-height: 150%; text-align: center; padding-top:9px; padding-right: 18px;
                 padding-bottom: 9px; padding-left: 18px;' valign="top">
                
                                                                                <h1 class="null" style='color: #2a2a2a; font-family: "Asap", Helvetica,
                 sans-serif; font-size: 32px; font-style: normal; font-weight: bold; line-height:
                 125%; letter-spacing: 2px; text-align: center; display: block; margin: 0;
                 padding: 0'><span style="text-transform:uppercase">Forgot</span></h1>
                
                
                                                                                <h2 class="null" style='color: #2a2a2a; font-family: "Asap", Helvetica,
                 sans-serif; font-size: 24px; font-style: normal; font-weight: bold; line-height:
                 125%; letter-spacing: 1px; text-align: center; display: block; margin: 0;
                 padding: 0'><span style="text-transform:uppercase">your password?</span></h2>
                
                                                                            </td>
                                                                        </tr>
                                                                    </tbody>
                                                                </table>
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                                <table border="0" cellpadding="0" cellspacing="0" class="mcnTextBlock" style="border-collapse: collapse; mso-table-lspace: 0; mso-table-rspace:
                 0; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;
                 min-width:100%;" width="100%">
                                                    <tbody class="mcnTextBlockOuter">
                                                        <tr>
                                                            <td class="mcnTextBlockInner" style="mso-line-height-rule: exactly;
                 -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%" valign="top">
                                                                <table align="left" border="0" cellpadding="0" cellspacing="0"
                                                                    class="mcnTextContentContainer" style="border-collapse: collapse; mso-table-lspace: 0;
                 mso-table-rspace: 0; -ms-text-size-adjust: 100%; -webkit-text-size-adjust:
                 100%; min-width:100%;" width="100%">
                                                                    <tbody>
                                                                        <tr>
                                                                            <td class="mcnTextContent" style='mso-line-height-rule: exactly;
                 -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; word-break: break-word;
                 color: #2a2a2a; font-family: "Asap", Helvetica, sans-serif; font-size: 16px;
                 line-height: 150%; text-align: center; padding-top:9px; padding-right: 18px;
                 padding-bottom: 9px; padding-left: 18px;' valign="top">Not to worry, we got you! Let’s get you a new password.
                                                                                <br></br>
                                                                            </td>
                                                                        </tr>
                                                                    </tbody>
                                                                </table>
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                                <table border="0" cellpadding="0" cellspacing="0" class="mcnButtonBlock" style="border-collapse: collapse; mso-table-lspace: 0;
                 mso-table-rspace: 0; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;
                 min-width:100%;" width="100%">
                                                    <tbody class="mcnButtonBlockOuter">
                                                        <tr>
                                                            <td align="center" class="mcnButtonBlockInner" style="mso-line-height-rule:
                 exactly; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;
                 padding-top:18px; padding-right:18px; padding-bottom:18px; padding-left:18px;" valign="top">
                                                                <table border="0" cellpadding="0" cellspacing="0" class="mcnButtonBlock"
                                                                    style="border-collapse: collapse; mso-table-lspace: 0; mso-table-rspace: 0;
                 -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; min-width:100%;" width="100%">
                                                                    <tbody class="mcnButtonBlockOuter">
                                                                        <tr>
                                                                            <td align="center" class="mcnButtonBlockInner" style="mso-line-height-rule:
                 exactly; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;
                 padding-top:0; padding-right:18px; padding-bottom:18px; padding-left:18px;" valign="top">
                                                                                <table border="0" cellpadding="0" cellspacing="0"
                                                                                    class="mcnButtonContentContainer" style="border-collapse: collapse; mso-table-lspace: 0;
                 mso-table-rspace: 0; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;
                 border-collapse: separate !important;border-radius: 48px;background-color:
                 #F57153;">
                                                                                    <tbody>
                                                                                        <tr>
                                                                                            <td align="center" class="mcnButtonContent"
                                                                                                style="mso-line-height-rule:
                 exactly; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;
                 font-family: 'Asap', Helvetica, sans-serif; font-size: 16px; padding-top:24px;
                 padding-right:48px; padding-bottom:24px; padding-left:48px;" valign="middle">
                                                                                                <a class="mcnButton " href="#" style="mso-line-height-rule: exactly;
                 -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; display: block; color: #f57153;
                 font-weight: normal; text-decoration: none; font-weight: normal;letter-spacing:
                 1px;line-height: 100%;text-align: center;text-decoration: none;color:
                 #FFFFFF; text-transform:uppercase;" target="_blank" title="Review Lingo kit
                 invitation">${myOTP}</a>
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
                                                    </tbody>
                                                </table>
                                                <table border="0" cellpadding="0" cellspacing="0" class="mcnImageBlock" style="border-collapse: collapse; mso-table-lspace: 0; mso-table-rspace: 0;
                 -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; min-width:100%;" width="100%">
                                                    <tbody class="mcnImageBlockOuter">
                                                        <tr>
                                                            <td class="mcnImageBlockInner" style="mso-line-height-rule: exactly;
                 -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; padding:0px" valign="top">
                                                                <table align="left" border="0" cellpadding="0" cellspacing="0"
                                                                    class="mcnImageContentContainer" style="border-collapse: collapse; mso-table-lspace: 0;
                 mso-table-rspace: 0; -ms-text-size-adjust: 100%; -webkit-text-size-adjust:
                 100%; min-width:100%;" width="100%">
                                                                    <tbody>
                                                                        <tr>
                                                                            <td class="mcnImageContent" style="mso-line-height-rule: exactly;
                 -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; padding-right: 0px;
                 padding-left: 0px; padding-top: 0; padding-bottom: 0; text-align:center;" valign="top"></td>
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
                                            <td id="templateFooter" style="mso-line-height-rule: exactly;
                 -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; background-color: #fed149;
                 border-top: 0; border-bottom: 0; padding-top: 8px; padding-bottom: 80px" valign="top">
                                                <table border="0" cellpadding="0" cellspacing="0" class="mcnTextBlock" style="border-collapse: collapse; mso-table-lspace: 0; mso-table-rspace: 0;
                 -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; min-width:100%;" width="100%">
                                                    <tbody class="mcnTextBlockOuter">
                                                        <tr>
                                                            <td class="mcnTextBlockInner" style="mso-line-height-rule: exactly;
                 -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%" valign="top">
                
                                                                <table align="center" border="0" cellpadding="0" cellspacing="0" style="border-collapse: collapse; mso-table-lspace: 0; mso-table-rspace: 0;
                 -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; min-width:100%;" width="100%">
                                                                    <tbody>
                                                                        <tr>
                                                                            <td style="mso-line-height-rule: exactly; -ms-text-size-adjust: 100%;
                 -webkit-text-size-adjust: 100%; padding-top: 24px; padding-right: 18px;
                 padding-bottom: 24px; padding-left: 18px; color: #7F6925; font-family: 'Asap',
                 Helvetica, sans-serif; font-size: 12px;" valign="top">
                                                                                <div style="text-align: center;">Made with
                                                                                    <a href="" style="mso-line-height-rule: exactly; -ms-text-size-adjust: 100%;
                 -webkit-text-size-adjust: 100%; color: #f57153; font-weight: normal; text-decoration:
                 none" target="_blank">
                                                                                        <img align="none" alt="Heart icon" height="10"
                                                                                            src="https://static.lingoapp.com/assets/images/email/made-with-heart.png"
                                                                                            style="-ms-interpolation-mode: bicubic; border: 0; height: auto; outline: none;
                 text-decoration: none; width: 10px; height: 10px; margin: 0px;" width="10" />
                                                                                    </a>by
                                                                                    <a href="" style="mso-line-height-rule: exactly;
                 -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; color: #f57153;
                 font-weight: normal; text-decoration: none; color:#7F6925;" target="_blank"
                                                                                        title="Noun Project - Icons for Everything">Noun
                                                                                        Project</a>in Culver City, CA 90232
                                                                                </div>
                                                                            </td>
                                                                        </tr>
                                                                    <tbody></tbody>
                                                    </tbody>
                                                </table>
                                                <table align="center" border="0" cellpadding="12" style="border-collapse:
                 collapse; mso-table-lspace: 0; mso-table-rspace: 0; -ms-text-size-adjust:
                 100%; -webkit-text-size-adjust: 100%; ">
                                                    <tbody>
                                                        <tr>
                                                            <td style="mso-line-height-rule: exactly; -ms-text-size-adjust: 100%;
                 -webkit-text-size-adjust: 100%">
                                                                <a href="" style="mso-line-height-rule: exactly; -ms-text-size-adjust: 100%;
                 -webkit-text-size-adjust: 100%; color: #f57153; font-weight: normal; text-decoration: none" target="_blank">
                                                                    <img alt="twitter" height="32"
                                                                        src="https://static.lingoapp.com/assets/images/email/twitter-ic-32x32-email@2x.png"
                                                                        style="-ms-interpolation-mode: bicubic; border: 0; height: auto; outline: none; text-decoration:
                 none" width="32" />
                                                                </a>
                                                            </td>
                                                            <td style="mso-line-height-rule: exactly; -ms-text-size-adjust: 100%;
                 -webkit-text-size-adjust: 100%">
                                                                <a href="" style="mso-line-height-rule: exactly; -ms-text-size-adjust: 100%;
                 -webkit-text-size-adjust: 100%; color: #f57153; font-weight: normal; text-decoration:
                 none" target="_blank">
                                                                    <img alt="Instagram" height="32"
                                                                        src="https://static.lingoapp.com/assets/images/email/instagram-ic-32x32-email@2x.png"
                                                                        style="-ms-interpolation-mode: bicubic; border: 0; height: auto; outline: none;
                 text-decoration: none" width="32" />
                                                                </a>
                                                            </td>
                                                            <td style="mso-line-height-rule: exactly; -ms-text-size-adjust: 100%;
                 -webkit-text-size-adjust: 100%">
                                                                <a href="" style="mso-line-height-rule: exactly; -ms-text-size-adjust: 100%;
                 -webkit-text-size-adjust: 100%; color: #f57153; font-weight: normal; text-decoration: none" target="_blank">
                                                                    <img alt="medium" height="32"
                                                                        src="https://static.lingoapp.com/assets/images/email/medium-ic-32x32-email@2x.png"
                                                                        style="-ms-interpolation-mode: bicubic; border: 0; height: auto; outline: none; text-decoration: none"
                                                                        width="32" />
                                                                </a>
                                                            </td>
                                                            <td style="mso-line-height-rule: exactly; -ms-text-size-adjust: 100%;
                 -webkit-text-size-adjust: 100%">
                                                                <a href="" style="mso-line-height-rule: exactly; -ms-text-size-adjust: 100%;
                 -webkit-text-size-adjust: 100%; color: #f57153; font-weight: normal; text-decoration: none" target="_blank">
                                                                    <img alt="facebook" height="32"
                                                                        src="https://static.lingoapp.com/assets/images/email/facebook-ic-32x32-email@2x.png"
                                                                        style="-ms-interpolation-mode: bicubic; border: 0; height: auto; outline: none;
                 text-decoration: none" width="32" />
                                                                </a>
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
                        </table>
                        </td>
                        </tr>
                        </table>
                    </center>
                </body>
                
                </html>`,
            });

            console.log("Message sent: %s", info.messageId);
        }


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