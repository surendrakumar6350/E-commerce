"use client"
import { BASE_URL } from "@/Constants";
import { addCart, addsteps, addaddress} from "@/app/redux/remainingSlices/cart";
import Footer from "@/app/v1/components/homeutils/Footer";
import Nav from "@/app/v1/components/homeutils/Nav";
import Link from "next/link";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
function OrderSuccessPage() {
  const dispatch = useDispatch();
  const {ordersuccess} = useSelector((data)=> data.cartslice)
  console.log(ordersuccess ? ordersuccess : null)




useEffect(()=> {
  localStorage.setItem('cart', JSON.stringify([]));
  dispatch(addCart([]))
  dispatch(addsteps(1))
  dispatch(addaddress({}))
},[]);
  return (
    <>
    <div style={{backgroundColor: "#999"}}>
      <Nav />

    <main style={{backgroundColor: "#999"}} className="grid min-h-full place-items-center bg-white px-2 py-15 sm:py-18 lg:px-3">
      <div className="text-center w-full ">
    
        


        <div className="containerr">
  <div className="printer-top"></div>
    
  <div className="paper-container">
    <div className="printer-bottom"></div>

    <div className="paper">
      <div className="main-contents">
        <div className="success-icon">&#10004;</div>
        <div className="success-title">
          Payment Complete
        </div>
        <div className="success-description">
<p>PaymentId : <b>{ordersuccess?.payment?.razorpay_payment_id}</b></p>
<p>Check Email : <b>{ordersuccess?.address?.email}</b></p>
        </div>
        <div className="order-details">
          <div className="order-number-label">Order Number</div>
          <div className="order-number">{ordersuccess?.orderId}</div>
        </div>
        
      </div>
      <div className="jagged-edge"></div>
    </div>
  </div>
</div>



        <div className="mt-1 mb-2 flex items-center justify-center gap-x-6">
          <Link
            href={`${BASE_URL}/v1/home`}
            className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Go back home
          </Link>
        </div>
      </div>
    </main>
    </div>
    <Footer />
    </>
  );
}

export default OrderSuccessPage;
