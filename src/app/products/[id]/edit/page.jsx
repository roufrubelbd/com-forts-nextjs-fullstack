"use client";
import { use, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import Spinner from "@/components/Spinner";

export default function EditProductPage({ params }) { 
  const { id } = use(params); 
  const router = useRouter();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id || id === "undefined") return; 

    async function fetchProduct() {
      const res = await fetch(`/api/products/${id}`);
      if (res.ok) {
        const data = await res.json();
        setProduct(data);
      }
      setLoading(false);
    }
    fetchProduct();
  }, [id]);

  const handleUpdate = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const updatedData = Object.fromEntries(formData.entries());
    
    // Ensure price is a number
    updatedData.price = parseFloat(updatedData.price);

    try {
      const res = await fetch(`/api/products/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updatedData),
      });

      if (res.ok) {
        toast.success("Product updated!");
        router.push("/manage");
        router.refresh();
      } else {
        throw new Error("Update failed");
      }
    } catch (err) {
      toast.error(err.message);
    }
  };

  if (loading) return <Spinner />;

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-2xl font-bold text-teal-600 mb-6">Edit Product</h1>
      <form onSubmit={handleUpdate} className="space-y-4 bg-white p-6 shadow rounded-lg border">
        <div className="form-control">
          <label className="label">Title</label>
          <input name="title" defaultValue={product?.title} className="input input-bordered" required />
        </div>

        <div className="form-control">
          <label className="label">Price</label>
          <input name="price" type="number" step="0.01" defaultValue={product?.price} className="input input-bordered" required />
        </div>

        <div className="form-control">
          <label className="label">Category</label>
          <input name="category" defaultValue={product?.category} className="input input-bordered" required />
        </div>

        <div className="form-control">
          <label className="label">Image URL</label>
          <input name="image" defaultValue={product?.image} className="input input-bordered" />
        </div>

        <button type="submit" className="btn bg-teal-600 text-white w-full mt-4">
          Update Product
        </button>
      </form>
    </div>
  );
}