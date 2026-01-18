"use client";
import { Truck, Headphones, RefreshCw, Lock } from "lucide-react";

const features = [
  {
    title: "FREE SHIPPING",
    desc: "Free shipping for all US orders",
    icon: <Truck size={32} />,
    color: "text-teal-400",
    bg: "bg-teal-400/10",
  },
  {
    title: "SUPPORT 24/7",
    desc: "We support 24 hours a day",
    icon: <Headphones size={32} />,
    color: "text-purple-400",
    bg: "bg-purple-400/10",
  },
  {
    title: "100% MONEY BACK",
    desc: "You have 30 days to return",
    icon: <RefreshCw size={32} />,
    color: "text-amber-400",
    bg: "bg-amber-400/10",
  },
  {
    title: "PAYMENT SECURE",
    desc: "We ensure secure payment",
    icon: <Lock size={32} />,
    color: "text-emerald-400",
    bg: "bg-emerald-400/10",
  },
];

export default function Features() {
  return (
    <section className="py-20 px-6 md:px-16 lg:px-24 bg-base-100">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((item, i) => (
            <div
              key={i}
              className="group relative bg-base-200/40 backdrop-blur-sm border border-white/5 rounded-2xl p-8 flex flex-col items-center text-center transition-all duration-300 hover:-translate-y-2 hover:bg-base-200/80 hover:border-teal-500/30 shadow-xl"
            >
              {/* Icon Container with soft glow */}
              <div className={`p-4 rounded-2xl ${item.bg} ${item.color} mb-5 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3`}>
                {item.icon}
              </div>

              <h3 className="font-bold text-base md:text-lg tracking-wider text-white group-hover:text-teal-400 transition-colors">
                {item.title}
              </h3>
              
              <p className="text-gray-400 text-sm mt-3 leading-relaxed opacity-80 group-hover:opacity-100">
                {item.desc}
              </p>

              {/* Subtle bottom accent line on hover */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-1 bg-teal-500 rounded-full transition-all duration-300 group-hover:w-1/3"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}