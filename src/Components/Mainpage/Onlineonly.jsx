import React from 'react';

const Onlineonly = () => {
  return (
    <div className='w-full pt-8 relative pl-[15%] sm:pl-[10%] bg-black'>
      <div className='relative w-full'>
        <img src='./assets/onlineonly.png' alt='onlineonly' className='w-full min-h-[200px] md:min-h-[300px] lg:min-h-full'/>
        <div className='h-full w-full flex items-center justify-center absolute top-0 z-10 flex-col '>
          <p className='text-xl  sm:text-2xl md:text-3xl lg:text-4xl pb-5'>ONLINE ONLY</p>
          <p className='text-center text-sm  sm:text-lg md:text-xl lg:text-2xl pb-3 sm:pb-5 md:pb-7'>GET 20% OFF YOUR ORDER OF $50 OR MORE
            <br/> Use code<span className='font-extrabold'>“Chef20”</span></p>
          <button className=" text-sm sm:text-base md:text-lg lg:text-xl  py-2 sm:py-3 md:py-4 lg:py-6 px-8 sm:px-10 md:px-12 lg:px-16  border-[3px] border-black text-black mt-1  sm:mt-2 md:mt-3">
            Shop Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Onlineonly;
