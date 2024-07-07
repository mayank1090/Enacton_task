import React from "react";

const Subscribesave = () => {
  return (
    <div>
      <div className="w-full pt-16 relative pl-[15%] sm:pl-[10%] bg-black">
        <div className="flex ">
          <img src="./assets/firstone.png" alt="first" className="w-1/2" />
          <img src="./assets/secondone.png" alt="second" className="w-1/2" />
        </div>
        <div className="flex ">
          <img src="./assets/thirdone.png" alt="third" className="w-1/2" />
          <img src="./assets/forthone.png" alt="forth" className="w-1/2" />
        </div>
        <div className="relative w-full pt-16">
          <img
            src="./assets/promo.png"
            alt="onlineonly"
            className="w-full min-h-[250px] md:min-h-[300px] lg:min-h-full"
          />
          <div className=" w-full flex absolute bottom-[10%] z-10 flex-col pl-8 sm:pl-10 md:pl-12" >
           <div className=" w-3/4 sm:w-[45%] border-white border-b-4">
           <p className="pb-4 text-white text-xl  sm:text-2xl md:text-3xl">SIGN UP SPECIAL PROMOTIONS</p>
           </div>
            <p className="text-xs sm:text-base md:text-lg pt-4  sm:pt-6 md:pt-8 text-white">
            Get exclusive deals you won’t find anywhere else straight to your inbox!
            </p>
            <div className="w-full flex gap-3 pt-4 sm:pt-6 md:pt-8">
                <input type="text" placeholder="Enter email address" className="w-1/2 sm:w-[40%] p-2 text-xs sm:text-base md:text-lg bg-[#ffffff4d] outline-none border-2 border-white text-white" />
                <button className="px-6 sm:px-10 py-2 text-xs sm:text-base md:text-lg bg-[#D29A5A]"><p className="text-white">Subsribe</p></button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subscribesave;
