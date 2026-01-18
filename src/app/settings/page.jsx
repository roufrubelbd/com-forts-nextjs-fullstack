"use client";

import React, { useState } from "react";
import { useSession } from "next-auth/react";
import { 
  User, 
  ShieldCheck, 
  Bell, 
  Palette, 
  Globe, 
  Save,
  Camera,
  ExternalLink
} from "lucide-react";
import toast from "react-hot-toast";

export default function SettingsPage() {
  const { data: session } = useSession();
  const [loading, setLoading] = useState(false);

  const handleSave = (section) => {
    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      toast.success(`${section} settings updated!`);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-base-100 pb-20 pt-10 px-4 md:px-10 lg:px-20">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="mb-10">
          <h1 className="text-4xl font-black text-white">Settings</h1>
          <p className="text-gray-500 mt-2">Manage your account preferences and store configurations.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* LEFT: Navigation Sidebar */}
          <div className="lg:col-span-4 space-y-2">
            {[
              { id: "profile", label: "Profile Info", icon: <User size={18} /> },
              { id: "security", label: "Security", icon: <ShieldCheck size={18} /> },
              { id: "notifications", label: "Notifications", icon: <Bell size={18} /> },
              { id: "appearance", label: "Appearance", icon: <Palette size={18} />, active: true },
              { id: "region", label: "Region & Language", icon: <Globe size={18} /> },
            ].map((item) => (
              <button
                key={item.id}
                className={`w-full flex items-center gap-4 px-5 py-4 rounded-2xl font-bold transition-all ${
                  item.active 
                  ? "bg-teal-600 text-white shadow-lg shadow-teal-900/20" 
                  : "bg-base-200/40 text-gray-400 hover:bg-base-200 hover:text-white border border-white/5"
                }`}
              >
                {item.icon}
                {item.label}
              </button>
            ))}
          </div>

          {/* RIGHT: Content Area */}
          <div className="lg:col-span-8 space-y-8">
            
            {/* Profile Section */}
            <section className="bg-base-200/40 backdrop-blur-xl border border-white/5 rounded-[2rem] p-8">
              <div className="flex items-center justify-between mb-8">
                <h3 className="text-xl font-bold text-white flex items-center gap-2">
                  <User className="text-teal-500" /> Public Profile
                </h3>
                <button 
                  onClick={() => handleSave("Profile")}
                  className="btn btn-sm btn-teal-600 bg-teal-600 border-none text-white rounded-lg px-6"
                >
                  {loading ? "..." : "Save"}
                </button>
              </div>

              <div className="flex flex-col md:flex-row gap-8 items-center mb-8">
                <div className="relative group">
                  <div className="w-24 h-24 rounded-3xl overflow-hidden ring-4 ring-teal-500/20">
                    <img 
                      src={session?.user?.image || "https://ui-avatars.com/api/?name=User"} 
                      alt="Profile" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <button className="absolute -bottom-2 -right-2 p-2 bg-teal-600 rounded-xl text-white shadow-lg group-hover:scale-110 transition-transform">
                    <Camera size={16} />
                  </button>
                </div>
                <div className="flex-grow space-y-1 text-center md:text-left">
                  <h4 className="text-lg font-bold text-white">{session?.user?.name || "Guest User"}</h4>
                  <p className="text-sm text-gray-500">{session?.user?.email}</p>
                  <span className="badge badge-outline border-white/10 text-[10px] uppercase font-bold tracking-widest text-teal-500">Administrator</span>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="form-control">
                  <label className="label text-xs font-bold text-gray-500 uppercase">Display Name</label>
                  <input type="text" defaultValue={session?.user?.name} className="input bg-base-100 border-white/10 rounded-xl focus:border-teal-500 focus:outline-none" />
                </div>
                <div className="form-control">
                  <label className="label text-xs font-bold text-gray-500 uppercase">Username</label>
                  <input type="text" placeholder="@username" className="input bg-base-100 border-white/10 rounded-xl focus:border-teal-500 focus:outline-none" />
                </div>
              </div>
            </section>

            {/* Appearance Section (Always Dark Logic) */}
            <section className="bg-base-200/40 backdrop-blur-xl border border-white/5 rounded-[2rem] p-8">
              <h3 className="text-xl font-bold text-white flex items-center gap-2 mb-6">
                <Palette className="text-teal-500" /> Appearance
              </h3>
              
              <div className="p-6 bg-teal-500/5 border border-teal-500/20 rounded-2xl mb-6">
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="font-bold text-teal-500">Forced Dark Mode Active</h4>
                    <p className="text-xs text-gray-400 mt-1 max-w-xs">Your "Comforts" experience is set to a permanent dark theme for eye comfort and premium aesthetics.</p>
                  </div>
                  <div className="badge badge-teal-500 text-white font-bold p-3">Enabled</div>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-4">
                <div className="aspect-video bg-neutral-900 rounded-xl border-2 border-teal-500 flex items-center justify-center relative cursor-pointer">
                  <span className="text-[10px] font-bold uppercase text-white">Onyx Dark</span>
                </div>
                <div className="aspect-video bg-gray-200 rounded-xl border border-white/5 flex items-center justify-center opacity-40 cursor-not-allowed grayscale">
                  <span className="text-[10px] font-bold uppercase text-gray-600">Pure Light</span>
                </div>
                <div className="aspect-video bg-teal-900 rounded-xl border border-white/5 flex items-center justify-center opacity-40 cursor-not-allowed grayscale">
                  <span className="text-[10px] font-bold uppercase text-teal-200">Emerald</span>
                </div>
              </div>
            </section>

            {/* Danger Zone */}
            <section className="border border-red-500/20 bg-red-500/5 rounded-[2rem] p-8">
               <h3 className="text-lg font-bold text-red-500 mb-2">Danger Zone</h3>
               <p className="text-sm text-gray-500 mb-6">Permanently delete your account and all associated product data. This action is not reversible.</p>
               <button className="btn btn-outline border-red-500/30 text-red-500 hover:bg-red-500 hover:border-red-500 rounded-xl px-8 transition-all font-bold">
                 Deactivate Account
               </button>
            </section>

          </div>
        </div>
      </div>
    </div>
  );
}