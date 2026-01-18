// "use client";
import Image from "next/image";
import React from "react";
import img01 from "../assets/discounted/1.png"
import img02 from "../assets/discounted/2.png"
import img03 from "../assets/discounted/3.png"
import Link from "next/link";

const DiscountedBanner = () => {
  return (
    <section className="bg-[#FFF] py-6 md:py-20 overflow-hidden px-6 md:px-16 lg:px-24">
      <h3 className="font-bold text-4xl text-indigo-600 text-center py-8">BIG SALES</h3>
      <div className="flex flex-col md:flex-row items-center md:justify-between gap-4">

        {/* LEFT TEXT SECTION */}
        <div className="flex flex-col gap-4 w-full md:w-1/3">
          <p className="text-sm font-semibold tracking-widest text-gray-600">
            NEW DESIGN
          </p>

          <h2 className="text-3xl md:text-5xl font-bold leading-tight">
            <span className="text-amber-400">Up to</span> <span className="text-teal-500">50% Off</span>
          </h2>

          <h3 className="text-2xl md:text-3xl font-medium text-gray-700">
            All T-Shirt & Accessories
          </h3>

          <Link href="/products" className="bg-teal-500 hover:bg-teal-600 text-white px-8 py-3 mt-4 rounded-full w-fit text-sm md:text-base transition">
            SHOP NOW
          </Link>
        </div>

        {/* RIGHT IMAGE SECTION */}
        <div className="flex flex-col md:flex-row md:justify-end gap-2 w-full md:w-2/3">
            <Image
              src={img01}
              width={200}
              height={200}
              className="object-contain"
              alt="White Tiger Shirt"
            />
            <Image
              src={img02}
              width={200}
              height={200}
              className="object-contain"
              alt="Black Tiger Shirt"
            />
            <Image
              src={img03}
              width={200}
              height={200}
              className="object-contain"
              alt="Yellow Tiger Shirt"
            />
        </div>

      </div>
    </section>
  );
};

export default DiscountedBanner;

