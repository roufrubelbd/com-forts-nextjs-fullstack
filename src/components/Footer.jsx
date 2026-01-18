"use client";
import Link from "next/link";
import React from "react";
import { FaFacebookF, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { Mail, Phone, MapPin, ArrowUpRight } from "lucide-react";
import Logo from "./Logo";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: <FaFacebookF />, href: "https://facebook.com/roufrubelbd", color: "hover:bg-[#1877F2]", name: "Facebook" },
    { icon: <BsTwitterX />, href: "https://x.com/MRouf77639", color: "hover:bg-[#000000] hover:border-white/20", name: "X" },
    { icon: <FaLinkedinIn />, href: "https://linkedin.com/in/roufrubelbd", color: "hover:bg-[#0A66C2]", name: "LinkedIn" },
    { icon: <FaInstagram />, href: "#", color: "hover:bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7]", name: "Instagram" },
  ];

  return (
    <footer className="bg-base-100 border-t border-white/5 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6 md:px-16 lg:px-24">
        
        {/* MAIN SECTION */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand Column */}
          <div className="space-y-6">
            <Logo size="md" />
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              Redefining everyday elegance with premium quality and unmatched comfort. Your journey to better style starts here.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white transition-all duration-300 ${social.color} hover:scale-110 hover:shadow-lg`}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-xs">Shop Collections</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li><Link href="/products?category=Men" className="hover:text-teal-500 transition-colors">Men's Fashion</Link></li>
              <li><Link href="/products?category=Women" className="hover:text-teal-500 transition-colors">Women's Fashion</Link></li>
              <li><Link href="/products?category=Accessories" className="hover:text-teal-500 transition-colors">Accessories</Link></li>
              <li><Link href="/products?filter=new" className="hover:text-teal-500 flex items-center gap-1 group">New Arrivals <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-all" /></Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-xs">Support</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li><Link href="/about" className="hover:text-teal-500 transition-colors">Our Story</Link></li>
              <li><Link href="/contact" className="hover:text-teal-500 transition-colors">Contact Us</Link></li>
              <li><Link href="/shipping" className="hover:text-teal-500 transition-colors">Shipping Policy</Link></li>
              <li><Link href="/terms" className="hover:text-teal-500 transition-colors">Terms & Conditions</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-xs">Get In Touch</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-teal-500 shrink-0" />
                <span>123 Fashion Ave, <br /> New York, NY 10001</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-teal-500 shrink-0" />
                <span>+1 (555) 000-1234</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-teal-500 shrink-0" />
                <span>support@comforts.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* BOTTOM LINE */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-xs">
            © {currentYear} <span className="text-teal-500 font-bold uppercase">Comforts</span>. All rights reserved.
          </p>
          <div className="flex gap-6 text-[10px] uppercase tracking-widest font-bold text-gray-600">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/cookies" className="hover:text-white transition-colors">Cookie Settings</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;