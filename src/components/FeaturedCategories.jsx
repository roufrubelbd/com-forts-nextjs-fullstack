// "use client";
import Image from "next/image";
import img001 from "../assets/featurePhoto/1.png"
import img002 from "../assets/featurePhoto/2.png"
import img003 from "../assets/featurePhoto/3.png"
import img004 from "../assets/featurePhoto/4.png"
import img005 from "../assets/featurePhoto/5.png"
import img006 from "../assets/featurePhoto/6.png"
import Link from "next/link";

const categories = [
  {
    label: "Men",
    img: img001,
    bg: "bg-[#C7EDE8]",
  },
  {
    label: "Women",
    img: img002,
    bg: "bg-[#FBE0E6]",
  },
  {
    label: "Youth & Baby",
    img: img003,
    bg: "bg-[#F9E8A0]",
  },
  {
    label: "Home Decor",
    img: img004,
    bg: "bg-[#D1E8FF]",
  },
  {
    label: "Phone Cases",
    img: img005,
    bg: "bg-[#E4F7F0]",
  },
  {
    label: "Bags",
    img: img006,
    bg: "bg-[#F5F3EB]",
  },
];

export default function FeaturedCategories() {
  return (
    <section className="py-10 px-6 md:px-16 lg:px-24">
      <h2 className="text-center text-3xl font-semibold py-16 text-amber-500 " >
        Featured Categories
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 place-items-center px-4">
        {categories.map((item, index) => (
          <Link href="/products"
            key={index}
            className={`w-full max-w-[180px] h-[220px] ${item.bg} rounded-xl flex flex-col items-center justify-center p-4 hover:scale-105 transition`}
          >
            <div className="relative w-30 h-30 mb-4">
              <Image
                src={item.img}
                alt={item.label}
                fill
                className="object-contain"
              />
            </div>

            <p className="text-center text-sm font-medium">{item.label}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}
