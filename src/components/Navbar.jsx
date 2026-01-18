"use client";
import Link from "next/link";
import React from "react";
import { useSession, signOut } from "next-auth/react";
import { 
  LayoutDashboard, PlusCircle, Settings, LogOut, 
  ChevronDown, Sparkles, Flame, Search, ShoppingCart
} from "lucide-react";
import Logo from "./Logo";

const Navbar = () => {
  const { data: session } = useSession();

  // Unified Menu Structure
  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Products", href: "/products" },
    { name: "Men", href: "/products?category=Men" },
    { name: "Women", href: "/products?category=Women" },
    { name: "Accessories", href: "/products?category=Accessories" },
    { name: "New Arrivals", href: "/products?filter=new", icon: <Sparkles size={14} /> },
    { name: "Best Sellers", href: "/products?filter=hot", icon: <Flame size={14} /> },
  ];

  return (
    <div className="navbar bg-base-100/90 backdrop-blur-md shadow-lg px-4 md:px-12 lg:px-20 sticky top-0 left-0 right-0 z-50 border-b border-white/5">
      <div className="navbar-start">
        {/* Mobile Dropdown */}
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>
          <ul tabIndex={0} className="menu menu-sm dropdown-content bg-base-200 rounded-xl z-1 mt-3 w-52 p-2 shadow-xl border border-white/10">
            {navLinks.map((link) => (
              <li key={link.name}><Link href={link.href}>{link.name}</Link></li>
            ))}
          </ul>
        </div>
        <Logo size="sm" />
      </div>

      {/* Desktop Nav - 7 Menus Total */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal gap-1 px-1 font-bold text-[13px] uppercase tracking-tight">
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link href={link.href} className="hover:text-teal-500 flex items-center gap-1.5 transition-all py-2">
                {link.icon && <span className="text-teal-500">{link.icon}</span>}
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="navbar-end gap-1 md:gap-3">
        {/* Search & Cart Utility */}
        <div className="flex items-center">
          <button className="btn btn-ghost btn-circle btn-sm md:btn-md text-gray-400 hover:text-teal-500">
            <Search size={20} />
          </button>
          <button className="btn btn-ghost btn-circle btn-sm md:btn-md text-gray-400 hover:text-teal-500 relative">
            <ShoppingCart size={20} />
            <span className="badge badge-teal-500 badge-xs absolute top-2 right-2 border-none text-[8px] p-1 text-white">0</span>
          </button>
        </div>

        {session ? (
          <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="btn btn-ghost hover:bg-teal-500/10 gap-2 px-2 md:px-3 rounded-full border border-white/10 ml-2">
              <div className="avatar">
                <div className="w-8 rounded-full ring-2 ring-teal-500 ring-offset-2 ring-offset-base-100">
                  <img src={session?.user?.image || `https://ui-avatars.com/api/?name=${session?.user?.name}&background=0D9488&color=fff`} alt="avatar" />
                </div>
              </div>
              <ChevronDown size={14} className="text-gray-500 hidden sm:block" />
            </div>

            <ul tabIndex={0} className="mt-4 z-[1] p-3 shadow-2xl menu menu-sm dropdown-content bg-base-200 rounded-2xl w-64 border border-white/10 backdrop-blur-xl">
              <div className="px-4 py-3 mb-2 bg-teal-500/5 rounded-xl border border-teal-500/10">
                <p className="text-[10px] uppercase tracking-widest text-gray-500 mb-1">Signed in as</p>
                <p className="font-bold text-teal-500 truncate">{session?.user?.name}</p>
              </div>
              
              <li><Link href="/add" className="py-3 flex gap-3 hover:text-teal-500 transition-all"><PlusCircle size={18} /> Add Product</Link></li>
              <li><Link href="/manage" className="py-3 flex gap-3 hover:text-teal-500 transition-all"><LayoutDashboard size={18} /> Inventory</Link></li>
              <li><Link href="/settings" className="py-3 flex gap-3 hover:text-teal-500 transition-all"><Settings size={18} /> Settings</Link></li>

              <div className="divider my-1 opacity-10"></div>
              
              <li>
                <button onClick={() => signOut()} className="py-3 text-red-400 hover:bg-red-500/10 flex gap-3 rounded-xl transition-all font-bold">
                  <LogOut size={18} /> Logout
                </button>
              </li>
            </ul>
          </div>
        ) : (
          <Link href="/login" className="btn btn-teal-500 btn-sm md:btn-md rounded-full px-6 text-white border-none shadow-lg shadow-teal-500/20 ml-2">
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;





