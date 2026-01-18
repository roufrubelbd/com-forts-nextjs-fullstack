"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import Link from "next/link";

export default function AddPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.target);
    const product = Object.fromEntries(formData.entries());

    try {
      // Points to our local API route
      const res = await fetch("/api/products", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(product),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || "Failed to add product");
      }

      toast.success("Product added successfully");
      router.push("/products"); // Redirect to the gallery
      router.refresh();
    } catch (err) {
      toast.error(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-teal-600">Add New Product</h1>
        <Link href="/products" className="btn btn-ghost btn-sm">Cancel</Link>
      </div>

      <div className="card bg-base-100 shadow-xl border border-teal-100">
        <form onSubmit={handleSubmit} className="card-body gap-4">
          <div className="form-control">
            <label className="label font-semibold">Product Title</label>
            <input name="title" className="input input-bordered focus:border-teal-500" placeholder="e.g. Silk Cushion Cover" required />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="form-control">
              <label className="label font-semibold">Category</label>
              <select name="category" className="select select-bordered">
                <option value="Home Decor">Home Decor</option>
                <option value="Bags">Bags</option>
                <option value="Kids">Kids</option>
                <option value="Women">Women</option>
                <option value="Men">Men</option>
              </select>
            </div>
            <div className="form-control">
              <label className="label font-semibold">Price ($)</label>
              <input name="price" type="number" step="0.01" className="input input-bordered" placeholder="29.99" required />
            </div>
          </div>

          <div className="form-control">
            <label className="label font-semibold">Short Description</label>
            <input name="desc" className="input input-bordered" placeholder="Brief catchphrase" required />
          </div>

          <div className="form-control">
            <label className="label font-semibold">Full Description</label>
            <textarea name="longDesc" className="textarea textarea-bordered h-24" placeholder="Detailed product specifications..."></textarea>
          </div>

          <div className="form-control">
            <label className="label font-semibold">Image URL</label>
            <input name="image" type="url" className="input input-bordered" placeholder="https://images.unsplash.com/..." />
          </div>

          <div className="card-actions mt-4">
            <button 
              type="submit" 
              className="btn bg-teal-600 hover:bg-teal-700 text-white w-full border-none"
              disabled={loading}
            >
              {loading ? <span className="loading loading-spinner"></span> : "List Product"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}