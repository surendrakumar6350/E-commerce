import React from 'react'

const Support = () => {
  return (
    <>
    <section className="relative z-[40]">
      <div>

      <div className="flex justify-center">
      <p className="text-lightGray text-4xl text-center md:text-[3.4375rem] font-[700]">
      Supported by real people
      </p>
    </div>

      </div>
      <p
        className={` mt-[1.92rem] text-normal text-lightGrayAlt text-center`}
      >
        Our team of Happiness Engineers works remotely from 58 countries
        providing customer support across multiple time zones.
      </p>
      <div className="relative z-[10]">
        <img src="https://alternate-woo-commerce-landing-page.vercel.app/images/supported_team.png" alt="team" />
      </div>
      <div className="bg-[#5F37EF] px-4 relative z-[15]  flex flex-col gap-4 md:flex-row justify-center md:justify-around items-center h-[16.4rem]">
        <p
          className={` text-white leading-10 text-center text-xl md:text-[2.25rem]`}
        >
          WooCommerce - the{" "}
          <strong>most customizable eCommerce platform</strong> for building
          <strong>your online business.</strong>
        </p>
        <span className="sm:ml-3">
      <button type="button" className="inline-flex items-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
        <svg className="-ml-0.5 mr-1.5 h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
          <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
        </svg>
        Publish
      </button>
    </span>
      </div>
    </section>
    </>
  )
}

export default Support