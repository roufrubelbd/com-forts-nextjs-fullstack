// import React from "react";
// import Link from "next/link";

// export default async function ProductDetailsPage({ params }) {
//   const { id } = await params;

//   // fetch from your express backend
//   const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/products/${id}`);
// //   const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/products/${id} , {
// //     cache: "no-store",
// //   }`);

//   if (!res.ok) {
//     return (
//       <div className="max-w-3xl mx-auto p-4">
//         <p>Product not found.</p>
//         <Link href="/">Back</Link>
//       </div>
//     );
//   }

//   const product = await res.json();

//   return (
//     <div className="max-w-4xl mx-auto p-6">
//       {product.image && (
//         <div className="mb-6">
//           <img src={product.image} alt={product.title} className="w-full h-64 object-cover rounded" />
//         </div>
//       )}

//       <h1 className="text-3xl font-bold mb-2">{product.title}</h1>
//       <p className="text-gray-600 mb-4">{product.fullDescription || product.shortDescription}</p>

//       <div className="flex gap-4 mb-6">
//         <div><strong>Price:</strong> ${product.price ?? "N/A"}</div>
//         <div><strong>Date:</strong> {product.date ?? "N/A"}</div>
//         <div><strong>Priority:</strong> {product.priority ?? "N/A"}</div>
//       </div>

//       <Link href="/products" className="btn bg-teal-500 text-white hover:text-teal-600">All Products</Link>
//     </div>
//   );
// }
