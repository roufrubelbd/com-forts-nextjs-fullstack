"use client";

import Image from "next/image";
import img01 from "../assets/subscribe.png";
import { Send } from "lucide-react";

const NewsletterSection = () => {
  return (
    <div className="py-24 px-6 md:px-16 lg:px-24 bg-base-100">
      <div className="max-w-6xl mx-auto bg-gradient-to-br from-base-200/50 to-base-300/30 backdrop-blur-md border border-white/5 rounded-[2rem] overflow-hidden p-8 md:p-12 shadow-2xl">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          
          {/* LEFT IMAGE - With a subtle glow effect behind it */}
          <div className="relative flex justify-center group">
            <div className="absolute inset-0 bg-teal-500/10 blur-[80px] rounded-full group-hover:bg-teal-500/20 transition-all duration-500"></div>
            <Image
              src={img01}
              width={450}
              height={350}
              className="object-contain relative z-10 drop-shadow-2xl transform transition-transform duration-500 group-hover:scale-105"
              alt="Subscribe Illustration"
            />
          </div>

          {/* RIGHT CONTENT */}
          <div className="relative z-10">
            <span className="text-teal-500 font-bold tracking-[0.2em] text-sm uppercase mb-3 block">
              Join the Community
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6 leading-tight">
              Stay in the <span className="text-teal-500">Loop.</span>
            </h2>

            <p className="text-gray-400 text-lg mb-8 leading-relaxed max-w-md">
              Be the first to know about our new arrivals, exclusive offers, and
              the latest fashion updates delivered straight to your inbox.
            </p>

            <form 
              onSubmit={(e) => e.preventDefault()}
              className="flex flex-col sm:flex-row gap-3 bg-base-100/50 p-2 rounded-2xl border border-white/10 focus-within:border-teal-500/50 transition-all"
            >
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 bg-transparent p-4 rounded-xl text-white focus:outline-none placeholder:text-gray-600"
              />

              <button className="bg-teal-600 hover:bg-teal-500 text-white px-8 py-4 rounded-xl font-bold flex items-center justify-center gap-2 transition-all active:scale-95 shadow-lg shadow-teal-900/20">
                SUBSCRIBE
                <Send size={18} />
              </button>
            </form>
            
            <p className="text-[10px] text-gray-500 mt-4 px-2">
              By subscribing, you agree to our Privacy Policy and Terms of Service.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsletterSection;