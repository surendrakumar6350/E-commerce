import React from 'react'

const Footer = () => {
  return (
    <>
     <div className="text-lightGray  bg-white py-8 px-2  flex justify-evenly flex-col gap-8 lg:flex-row items-center">
        <div className="flex gap-16">
          <img src="https://alternate-woo-commerce-landing-page.vercel.app/images/x_icon.png" alt="x logo" />
          <img src="https://alternate-woo-commerce-landing-page.vercel.app/images/meta_icon.png" alt="meta logo" />
          <img src="https://alternate-woo-commerce-landing-page.vercel.app/images/feed_icon.png" alt="feed logo" />
          <img src="https://alternate-woo-commerce-landing-page.vercel.app/images/instagram_icon.png" alt="instagram logo" />
        </div>
        <p className="text-center">
          COPYRIGHT WOOCOMMERCE 2020 - TERMS & CONDITIONS PRIVACY POLICY
        </p>
        <div>
          <img src="https://alternate-woo-commerce-landing-page.vercel.app/images/automatic_logo.png" alt="automatic logo" />
        </div>
      </div>
    </>
  )
}

export default Footer