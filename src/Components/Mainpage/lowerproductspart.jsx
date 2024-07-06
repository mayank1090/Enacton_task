import React from "react";
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
import "./slwiperslider.css";

const Lowerproductspart = () => {
  return (
    <div className="w-full pl-[15%] sm:pl-[10%] bg-black">
      <div className=" w-full">
        <div className="upperheadingwithflower sm:w-1/2 w-3/4  relative pb-32 sm:pb-40">
          <img
            src="./assets/leavesimg.png"
            alt="leavesimg"
            className="w-1/2 -mt-8"
          />
          <div className="absolute bottom-0 left-0 ml-8 sm:ml-10 md:ml-12">
            <p className="  text-[#D29A5A] py-2 md:text-2xl sm:text-xl lg:text-4xl  sm:pb-4  pt-3 text-lg  border-b-4 border-[#D29A5A]">
              CHEF MATT PRODUCTS
            </p>
            <p className="text-white sm:text-base md:text-lg text-xs pt-4 pb-8  md:pb-12">
              Shop Gourmet Chef Quality products from the Chef Matt brand. Chef
              it yourself and Thank us later.
            </p>
          </div>
        </div>
        <div className="px-8">
          <Swiper
            className="h-full w-full px-8"
            modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
            spaceBetween={50}
            slidesPerView={4}
            navigation
            pagination={{ clickable: true }}
            scrollbar={false}
            breakpoints={{
              320: { slidesPerView: 1, spaceBetween: 20 },
              480: { slidesPerView: 2, spaceBetween: 30 },
              640: { slidesPerView: 3, spaceBetween: 30 },
              1024: { slidesPerView: 4, spaceBetween: 0 },
            }}
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}
          >
            {[...Array(10)].map((_, index) => (
              <SwiperSlide key={index}>
                <div className="flex flex-col justify-center items-center py-8 px-6 ">
                  <img
                    src="./assets/product.png"
                    alt="productimg"
                    className="max-h-[200px] max-w-[200px] sm:max-h-full sm:max-w-full"
                  />
                  <p className="text-[#D29A5A] text-lg text-center">
                    CINNAMON HONEY
                  </p>
                  <p className="text-white text-center text-base ">
                  <span className="line-through">  $12.00 </span> <span className="text-lg pl-2">$9.00</span>
                  </p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Lowerproductspart;
