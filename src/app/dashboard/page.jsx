"use client";

import React, { useMemo } from "react";
import { useSession } from "next-auth/react";
import { 
  PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend 
} from "recharts";
import { 
  Package, 
  User as UserIcon, 
  Calendar, 
  TrendingUp, 
  Plus,
  ArrowRight
} from "lucide-react";
import Link from "next/link";

export default function UserDashboard() {
  const { data: session } = useSession();

  // Mock data representing your product distribution
  // In a real app, you'd pass your 'products' array here to calculate counts
  const data = [
    { name: 'Men', value: 400 },
    { name: 'Women', value: 300 },
    { name: 'Accessories', value: 200 },
    { name: 'Home Decor', value: 150 },
  ];

  const COLORS = ['#0D9488', '#14B8A6', '#5EEAD4', '#99F6E4'];

  return (
    <div className="min-h-screen bg-base-100 text-white p-6 md:p-10 lg:p-16">
      <div className="max-w-7xl mx-auto space-y-8">
        
        {/* TOP ROW: Header & Welcome */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div>
            <h1 className="text-4xl font-black tracking-tight">Dashboard</h1>
            <p className="text-gray-500 mt-1">Overview of your activity and inventory.</p>
          </div>
          <Link href="/add" className="btn btn-teal-600 border-none px-8 rounded-2xl shadow-lg shadow-teal-900/20 gap-2">
            <Plus size={20} /> New Product
          </Link>
        </div>

        {/* MAIN GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* PROFILE CARD (Span 4) */}
          <div className="lg:col-span-4 bg-base-200/40 border border-white/5 backdrop-blur-xl rounded-[2.5rem] p-8 flex flex-col items-center text-center relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-teal-500/10 blur-[50px] rounded-full -mr-10 -mt-10 group-hover:bg-teal-500/20 transition-all duration-700"></div>
            
            <div className="relative">
              <div className="w-32 h-32 rounded-[2rem] overflow-hidden ring-4 ring-teal-500/20 mb-6">
                <img 
                  src={session?.user?.image || `https://ui-avatars.com/api/?name=${session?.user?.name}&background=0D9488&color=fff`} 
                  alt="Profile" 
                  className="w-full h-full object-cover shadow-2xl"
                />
              </div>
              <div className="absolute -bottom-2 -right-2 bg-teal-600 p-2 rounded-xl border-4 border-base-200">
                <TrendingUp size={16} />
              </div>
            </div>

            <h2 className="text-2xl font-bold mb-1">{session?.user?.name}</h2>
            <p className="text-gray-500 text-sm mb-6">{session?.user?.email}</p>
            
            <div className="divider opacity-10"></div>
            
            <div className="grid grid-cols-2 w-full gap-4">
              <div className="p-4 bg-white/5 rounded-2xl border border-white/5">
                <p className="text-[10px] uppercase tracking-widest text-gray-500 font-bold mb-1">Products</p>
                <p className="text-xl font-black text-teal-500">24</p>
              </div>
              <div className="p-4 bg-white/5 rounded-2xl border border-white/5">
                <p className="text-[10px] uppercase tracking-widest text-gray-500 font-bold mb-1">Status</p>
                <p className="text-xl font-black text-white">Active</p>
              </div>
            </div>
          </div>

          {/* ANALYTICS PIE CHART (Span 8) */}
          <div className="lg:col-span-8 bg-base-200/40 border border-white/5 backdrop-blur-xl rounded-[2.5rem] p-8 relative overflow-hidden">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-bold flex items-center gap-2">
                <Package className="text-teal-500" /> Category Distribution
              </h3>
            </div>

            <div className="h-[300px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={data}
                    cx="50%"
                    cy="50%"
                    innerRadius={80}
                    outerRadius={110}
                    paddingAngle={8}
                    dataKey="value"
                    stroke="none"
                  >
                    {data.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip 
                    contentStyle={{ backgroundColor: '#1A1A1A', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px' }}
                    itemStyle={{ color: '#fff' }}
                  />
                  <Legend iconType="circle" />
                </PieChart>
              </ResponsiveContainer>
            </div>
            
            <div className="mt-4 p-4 bg-teal-500/5 border border-teal-500/10 rounded-2xl flex items-center justify-between group cursor-pointer hover:bg-teal-500/10 transition-colors">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-teal-500/20 rounded-xl flex items-center justify-center text-teal-500">
                   <Calendar size={18} />
                </div>
                <p className="text-sm font-medium">Your Men's collection grew by 12% this month.</p>
              </div>
              <ArrowRight size={18} className="text-gray-500 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>

        </div>

        {/* RECENT ACTIVITY SECTION */}
        <div className="bg-base-200/40 border border-white/5 backdrop-blur-xl rounded-[2.5rem] p-8">
          <h3 className="text-xl font-bold mb-6">Recent Actions</h3>
          <div className="overflow-x-auto">
            <table className="table w-full text-gray-400">
              <thead>
                <tr className="border-b border-white/5 text-gray-500 uppercase text-[10px] tracking-widest">
                  <th>Action</th>
                  <th>Product</th>
                  <th>Category</th>
                  <th>Date</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-white/5 hover:bg-white/5 transition-colors">
                  <td className="text-teal-500 font-bold">Created</td>
                  <td className="text-white font-medium">Classic T-Shirt</td>
                  <td>Men</td>
                  <td>Jan 18, 2026</td>
                </tr>
                <tr className="border-b border-white/5 hover:bg-white/5 transition-colors">
                  <td className="text-amber-500 font-bold">Updated</td>
                  <td className="text-white font-medium">Silk Scarf</td>
                  <td>Accessories</td>
                  <td>Jan 17, 2026</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </div>
  );
}














// import { getServerSession } from "next-auth";
// import { authOptions } from "../api/auth/[...nextauth]/route";
// import Link from "next/link";


// export default async function Dashboard() {
//   const session = await getServerSession(authOptions);

//   if (!session) {
//     return <Link href="/login">You must be logged in</Link>;
//   }

//   return <p>Hello {session.user.name}</p>;
// }