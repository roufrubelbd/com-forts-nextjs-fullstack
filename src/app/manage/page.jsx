"use client";

import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import Link from "next/link";
import RequireAuth from "@/components/RequireAuth";
import Spinner from "@/components/Spinner";
import Swal from "sweetalert2";

export default function ManagePage() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function load() {
      try {
        const res = await fetch("/api/products"); // Local Next.js API
        if (!res.ok) throw new Error("Failed to load products");
        const data = await res.json();
        setProducts(data);
      } catch (err) {
        toast.error(err.message);
      } finally {
        setLoading(false);
      }
    }
    load();
  }, []);

  const handleDelete = async (id) => {
    const result = await Swal.fire({
      title: "Are you sure?",
      text: "This action cannot be undone!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#0d9488", // Teal color
      cancelButtonColor: "#ef4444",
      confirmButtonText: "Yes, delete it!",
    });

    if (!result.isConfirmed) return;

    try {
      const res = await fetch(`/api/products/${id}`, {
        method: "DELETE",
      });

      const data = await res.json();

      if (!data.success) {
        Swal.fire("Error", data.message || "Delete failed", "error");
        return;
      }

      // Update UI instantly
      setProducts((prev) => prev.filter((p) => p._id !== id));
      toast.success("Product removed");
    } catch (err) {
      Swal.fire("Server Error", "Could not reach the server.", "error");
    }
  };

  if (loading) return <Spinner />;

  return (
    <RequireAuth>
      <div className="max-w-6xl mx-auto p-6 mt-6">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold text-teal-600">Manage Inventory</h1>
          <Link
            href="/add"
            className="btn bg-teal-600 hover:bg-teal-700 text-white border-none"
          >
            + Add Product
          </Link>
        </div>

        {products.length === 0 ? (
          <div className="text-center py-20 bg-gray-50 rounded-xl border-2 border-dashed">
            <p className="text-gray-500 mb-4">Your store is empty.</p>
            <Link
              href="/add"
              className="text-teal-600 font-bold hover:underline"
            >
              Add your first product now
            </Link>
          </div>
        ) : (
          <div className="overflow-x-auto shadow-md rounded-lg border border-teal-100">
            <table className="table w-full bg-white">
              <thead className="bg-teal-50">
                <tr className="text-teal-800">
                  <th className="hidden md:table-cell">#</th>
                  <th>Product</th>
                  <th>Category</th>
                  <th>Price</th>
                  <th className="text-center">Actions</th>
                </tr>
              </thead>
              <tbody>
                {products.map((product, index) => (
                  <tr
                    key={product._id}
                    className="hover:bg-gray-50 transition-colors"
                  >
                    <td className="hidden md:table-cell text-gray-400">
                      {index + 1}
                    </td>
                    <td>
                      <div className="flex items-center gap-3">
                        <div className="avatar">
                          <div className="mask mask-squircle h-12 w-12 bg-gray-100">
                            <img
                              src={
                                product?.image ||
                                "https://placehold.co/100x100?text=No+Image"
                              }
                              alt={product.title}
                              className="object-cover"
                            />
                          </div>
                        </div>
                        <span className="font-bold text-gray-700">
                          {product.title}
                        </span>
                      </div>
                    </td>
                    <td>
                      <span className="badge badge-ghost">
                        {product.category}
                      </span>
                    </td>
                    <td className="font-mono text-teal-700 font-semibold">
                      $
                      {product.price
                        ? Number(product.price).toFixed(2)
                        : "0.00"}
                    </td>
                    <td>
                      <div className="flex justify-center gap-2">
                        <Link
                          href={`/products/${product._id}`}
                          className="btn btn-xs btn-ghost text-blue-600"
                        >
                          View
                        </Link>
                        <Link
                          href={`/products/${product._id}/edit`}
                          className="btn btn-xs btn-ghost text-orange-600"
                        >
                          Edit
                        </Link>
                        <button
                          onClick={() => handleDelete(product._id)}
                          className="btn btn-xs btn-ghost text-red-600"
                        >
                          Delete
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </RequireAuth>
  );
}
