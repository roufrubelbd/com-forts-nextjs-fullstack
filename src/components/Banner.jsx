"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";
import img01 from "../assets/1.png";
import img02 from "../assets/2.png";
import img03 from "../assets/3.png";
import Link from "next/link";

const Banner = () => {
  return (
    <div className="w-full md:h-[40vh] mt-6 px-6 md:px-16 lg:px-24">
      <Swiper
        modules={[ Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        loop={true}
        className="w-full h-full"
      >
        {/* SLIDE 1 */}
        <SwiperSlide>
          <div className="w-full h-full bg-[#f1f0ee] flex items-center justify-between gap-2 md:gap-10 px-6 md:px-16">
            {/* LEFT TEXT */}
            <div className="text-black space-y-4">
              <p className="text-sm tracking-widest">ELESSI STORE</p>
              <h1 className="text-2xl md:text-5xl font-bold">
                Autumn <br /> & Winter 2023
              </h1>

              <Link
                href="/products"
                className="text-xs md:text-base px-1 md:px-6 py-2 bg-teal-600 text-white rounded-md hover:bg-teal-700"
              >
                SHOP NOW
              </Link>
            </div>

            {/* RIGHT IMAGE */}
            <Image src={img01} alt="Banner 1" className="object-contain" />
          </div>
        </SwiperSlide>

        {/* SLIDE 2 */}
        <SwiperSlide>
          <div className="w-full h-full bg-amber-100 flex items-center justify-between px-6 md:px-16">
            <div className="text-black space-y-4">
              <p className="text-sm tracking-widest">NEW COLLECTION</p>
              <h1 className="text-xl md:text-5xl font-bold">
                Stylish Parts <br /> Bags
              </h1>

              <Link
                href="/products"
                className="px-2 md:px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
              >
                EXPLORE
              </Link>
            </div>

            <Image src={img02} alt="Banner 2" className="object-contain" />
          </div>
        </SwiperSlide>

        {/* SLIDE 3 */}
        <SwiperSlide>
          <div className="w-full h-full bg-gray-600 flex items-center justify-between px-6 md:px-16">
            <div className="text-gray-300 space-y-4">
              <p className="text-sm tracking-widest">HOT SALE</p>
              <h1 className="text-xl md:text-5xl font-bold">
                Trending Fashion <br /> 2023
              </h1>

              <Link
                href="/products"
                className="text-xs md:text-base px-1 md:px-6 py-2 bg-pink-600 text-white rounded-md hover:bg-pink-700"
              >
                BUY NOW
              </Link>
            </div>

            <Image src={img03} alt="Banner 3" className="object-contain" />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
