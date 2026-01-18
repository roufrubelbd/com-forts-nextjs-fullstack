"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import Link from "next/link";
import { PlusCircle, Image as ImageIcon, Tag, DollarSign, AlignLeft, X } from "lucide-react";

export default function AddPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.target);
    const product = Object.fromEntries(formData.entries());

    try {
      const res = await fetch("/api/products", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(product),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || "Failed to add product");
      }

      toast.success("Product listed successfully!");
      router.push("/products");
      router.refresh();
    } catch (err) {
      toast.error(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-base-100 py-12 px-4 md:px-0">
      <div className="max-w-3xl mx-auto">
        
        {/* Header Section */}
        <div className="flex justify-between items-end mb-10 px-2">
          <div>
            <span className="text-teal-500 font-bold tracking-widest text-xs uppercase">Inventory Management</span>
            <h1 className="text-4xl font-black text-white mt-1">Add New Product</h1>
          </div>
          <Link 
            href="/products" 
            className="btn btn-ghost btn-circle hover:bg-red-500/10 hover:text-red-500 transition-all"
          >
            <X size={24} />
          </Link>
        </div>

        {/* Form Card */}
        <div className="card bg-base-200/40 backdrop-blur-xl border border-white/5 shadow-2xl overflow-hidden">
          <form onSubmit={handleSubmit} className="card-body p-6 md:p-10 gap-6">
            
            {/* Title Field */}
            <div className="form-control">
              <label className="label text-xs uppercase tracking-widest font-bold text-gray-500">Product Title</label>
              <div className="relative">
                <Tag className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" size={18} />
                <input 
                  name="title" 
                  className="input bg-base-100 border-white/10 w-full pl-12 focus:border-teal-500 focus:outline-none rounded-xl h-12" 
                  placeholder="e.g. Classic Cotton Tee" 
                  required 
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Category Field */}
              <div className="form-control">
                <label className="label text-xs uppercase tracking-widest font-bold text-gray-500">Category</label>
                <select 
                  name="category" 
                  className="select bg-base-100 border-white/10 w-full focus:border-teal-500 focus:outline-none rounded-xl h-12"
                >
                  <option value="Men">Men's Fashion</option>
                  <option value="Women">Women's Fashion</option>
                  <option value="Kids">Kids' Collection</option>
                  <option value="Accessories">Accessories</option>
                  <option value="Home Decor">Home Decor</option>
                </select>
              </div>

              {/* Price Field */}
              <div className="form-control">
                <label className="label text-xs uppercase tracking-widest font-bold text-gray-500">Price ($)</label>
                <div className="relative">
                  <DollarSign className="absolute left-4 top-1/2 -translate-y-1/2 text-teal-500" size={18} />
                  <input 
                    name="price" 
                    type="number" 
                    step="0.01" 
                    className="input bg-base-100 border-white/10 w-full pl-12 focus:border-teal-500 focus:outline-none rounded-xl h-12 font-bold" 
                    placeholder="0.00" 
                    required 
                  />
                </div>
              </div>
            </div>

            {/* Short Description */}
            <div className="form-control">
              <label className="label text-xs uppercase tracking-widest font-bold text-gray-500">Short Description</label>
              <input 
                name="desc" 
                className="input bg-base-100 border-white/10 w-full focus:border-teal-500 focus:outline-none rounded-xl h-12" 
                placeholder="High-quality cotton T-shirt perfect for everyday wear." 
                required 
              />
            </div>

            {/* Full Description */}
            <div className="form-control">
              <label className="label text-xs uppercase tracking-widest font-bold text-gray-500">Full Details</label>
              <div className="relative">
                <AlignLeft className="absolute left-4 top-4 text-gray-500" size={18} />
                <textarea 
                  name="longDesc" 
                  className="textarea bg-base-100 border-white/10 w-full pl-12 focus:border-teal-500 focus:outline-none rounded-xl h-32 pt-3" 
                  placeholder="Tell your customers more about this item..."
                ></textarea>
              </div>
            </div>

            {/* Image URL */}
            <div className="form-control">
              <label className="label text-xs uppercase tracking-widest font-bold text-gray-500">Product Image URL</label>
              <div className="relative">
                <ImageIcon className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" size={18} />
                <input 
                  name="image" 
                  type="url" 
                  className="input bg-base-100 border-white/10 w-full pl-12 focus:border-teal-500 focus:outline-none rounded-xl h-12 text-sm text-teal-400" 
                  placeholder="https://i.postimg.cc/..." 
                  required
                />
              </div>
            </div>

            {/* Submit Button */}
            <div className="mt-6">
              <button 
                type="submit" 
                className="btn btn-teal-600 bg-teal-600 hover:bg-teal-500 border-none text-white w-full h-14 rounded-2xl font-black text-lg shadow-lg shadow-teal-900/30 transition-all active:scale-95 flex gap-3"
                disabled={loading}
              >
                {loading ? (
                  <span className="loading loading-spinner"></span>
                ) : (
                  <>
                    <PlusCircle size={22} />
                    List Product
                  </>
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}