import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import Lowerproductspart from "./lowerproductspart";
import Onlineonly from "./Onlineonly";
import Subscribesave from "./Subscribesave";
import Footer from "./Footer";

const Upperslider = () => {

    const [sidebigavbar, setsidebigavbar] = useState(false)
  return (
    <div className="mainuppersliderprnt h-screen w-screen relative">
      <div className="w-full h-full overflow-y-auto">
        <div className="relative w-full h-full">
          <Swiper
            className=" h-full w-full "
            modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
            spaceBetween={50}
            slidesPerView={1}
            autoplay={{ delay: 2000, disableOnInteraction: false }}
            pagination={{ clickable: false }}
            scrollbar={false}
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}
          >
            <SwiperSlide>
              <img
                src="/assets/Main.png"
                alt="mainpng"
                className="h-full w-full object-cover object-top"
              />
            </SwiperSlide>

            <SwiperSlide>
              <img
                src="/assets/Main.png"
                alt="mainpng"
                className="h-full w-full object-cover object-top"
              />
            </SwiperSlide>

            <SwiperSlide>
              <img
                src="/assets/Main.png"
                alt="mainpng"
                className="h-full w-full object-cover object-top"
              />
            </SwiperSlide>

            <SwiperSlide>
              <img
                src="/assets/Main.png"
                alt="mainpng"
                className="h-full w-full object-cover object-top"
              />
            </SwiperSlide>
          </Swiper>
          <div className=" absolute z-[999]  w-full flex justify-center bottom-0 pb-12 text-2xl">
            <button className="sm:py-5 text-lg sm:px-16 py-2 px-8  border-2 sm:border-[3px] border-[white] text-white">
              Meet Chef Matt
            </button>
          </div>
        </div>
        <Lowerproductspart />
        <Onlineonly />
        <Subscribesave />
        <Footer />
      </div>

     {sidebigavbar ?
     <div className="absolute left-0 top-0 h-full md::w-[25%] sm:w-[30%] w-[35%] flex flex-col justify-between  bg-[#130F0CCC] z-[999]">
      <div className=" flex-grow flex border-b-2 border-white px-4 md:px-8 py-4  ">
        <div className=" flex flex-col justify-between flex-grow">
        <div className="">
          <FontAwesomeIcon
           onClick={()=>setsidebigavbar(false)}
            icon={faXmark}
            className="text-white h-[1.25rem] w-[1.25rem] sm:h-[2rem] sm:w-[2rem] md:h-[2.5rem] md:w-[2.5rem] lg:h-[3rem] lg:w-[3rem] pl-4"
          />
          <div>
            <img src="./assets/sidenavlogo.png" alt="topImg" className="py-2" />
          </div>
          <div className=" flex flex-col p-2 justify-between items-start gap-3">
            <p className="text-white text-base sm:text-lg md:text-xl lg:text-2xl hover:text-[#D29A5A]">HOME</p>
            <p className="text-white text-base sm:text-lg md:text-xl lg:text-2xl hover:text-[#D29A5A] ">PRODUCTS</p>
            <p className="text-white text-base sm:text-lg md:text-xl lg:text-2xl hover:text-[#D29A5A]">MEET CHEF MATT</p>
            <p className="text-white text-base sm:text-lg md:text-xl lg:text-2xl hover:text-[#D29A5A]">FAQ</p>
            <p className="text-white text-base sm:text-lg md:text-xl lg:text-2xl hover:text-[#D29A5A] ">CONNECT WITH US</p>
          </div>
        </div>
        <div>
            <p className="text-white text-sm md:text-base">TEXT SUPPORT 24/7 <span className="text-[#D29A5A]">070-7782-9137</span></p>
        </div>
        </div>
        
      </div>
      <div className="flex flex-col gap-2 lg:flex-row lg:justify-between px-4 md:px-8 py-4">
            <div className="flex items-center gap-2">
                <img src="./assets/cart.png" alt="cartimg" className="w-[0.5rem] md:w-[0.75rem] lg:w-[1rem] h-[1rem] md:h-[1.5rem] lg:h-[1.75rem]" />
                <p className=" text-white text-base sm:text-lg md:text-xl lg:text-2xl">CART</p>
            </div>
            <div className="flex items-center gap-2">
                <img src="./assets/Favorite.png" alt="wishlistimg" className="w-[1rem] md:w-[1.5rem] lg:w-[1.75rem] h-[1rem] md:h-[1.5rem] lg:h-[1.75rem]" />
                <p className=" text-white text-base sm:text-lg md:text-xl lg:text-2xl">WISHLIST</p>
            </div>
        </div>
      </div>:<div className="absolute left-0 top-0 h-full w-[15%] sm:w-[10%] flex items-center border-r-[#D29A5A] border-r-8 bg-[#130F0CCC] z-[999]">
        <img
          src="/assets/cheftext.png"
          alt="sidebarimg"
          className="w-full h-1/2"
        />
        <div className="absolute w-full top-0 flex justify-center items-center pt-6  md:pt-8">
          <FontAwesomeIcon
          onClick={()=>setsidebigavbar(true)}
            icon={faBars}
            className="text-white h-[1.25rem] w-[1.25rem] sm:h-[2rem] sm:w-[2rem] md:h-[2.5rem] md:w-[2.5rem] lg:h-[3rem] lg:w-[3rem]"
          />
        </div>
      </div>}
    </div>
  );
};

export default Upperslider;
