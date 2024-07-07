import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const Footer = () => {
  return (
    <>
    <div className=' py-10 sm:py-12 md:py-14 px-8 sm:px-10 md:px-12 bg-black border-b-8  ml-[15%] sm:ml-[10%] border-[#D29A5A]  block sm:gap-4 sm:flex justify-between'>
        <div className='flex flex-1 gap-2 sm:gap-6 my-4 sm:my-0 '>
            <div className='w-5 sm:w-6 md:w-8 lg:w-9'>
                <img src="./assets/bag.png" alt="" className="" />
            </div>
            <div> 
                <p className=" text-lg sm:text-xl md:text-2xl  text-[#D29A5A]  md:pt-1">FREE SHIPPING WORLDWIDE</p>
                <p className="text-white text-xs sm:text-base md:text-lg pt-3">Guaranteed Delivery</p>
            </div>
        </div>

        <div className='flex flex-1  gap-2 sm:gap-6 my-4 sm:my-0'>
            <div className='w-5 sm:w-6 md:w-8 lg:w-9'>
                <img src="./assets/headphone.png" alt="" className="" />
            </div>
            <div> 
            <p className=" text-lg sm:text-xl md:text-2xl  text-[#D29A5A]  md:pt-1">24/7 CUSTOMER SERVICE</p>
            <p className="text-white text-xs sm:text-base md:text-lg pt-3">Text Us 24/7 at 070-7782-9137</p>
            </div>
        </div>
        <div className='flex flex-1  gap-2 sm:gap-6 my-4 sm:my-0'>
            <div className='w-5 sm:w-6 md:w-8 lg:w-9'>
                <img src="./assets/tick.png" alt="" className="" />
            </div>
            <div> 
            <p className=" text-lg sm:text-xl md:text-2xl  text-[#D29A5A] md:pt-1">QUALITY GUARANTEE!</p>
            <p className="text-white text-xs sm:text-base md:text-lg pt-3">Send Within 30 Days</p>
            </div>
        </div>
      
    </div>

    <div className='w-full py-4 sm:py-8 flex justify-center'>
        <img src="./assets/footerimg.png" alt="" className=" w-1/2 sm:w-1/4 md:w-[35%]" />
    </div>
    </>
  )
}

export default Footer
