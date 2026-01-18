// src/app/products/page.jsx
import Link from "next/link";
import { dbConnect } from "@/lib/mongodb";
import { Search, SlidersHorizontal, ArrowRight } from "lucide-react";

export default async function ProductsPage({ searchParams }) {
  const filters = (await searchParams) || {};
  const search = filters.search || "";
  const category = filters.category || "All";

  const productsCollection = await dbConnect("products");

  let query = {};
  if (category !== "All") query.category = category;
  if (search) query.title = { $regex: search, $options: "i" };

  const products = await productsCollection.find(query).toArray();

  return (
    <div className="px-4 md:px-10 lg:px-16 pb-20 pt-10 bg-base-100 min-h-screen">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
        <div>
          <span className="text-teal-500 font-bold tracking-widest text-xs uppercase">Premium Selection</span>
          <h1 className="text-4xl font-black text-white mt-1">All Collections</h1>
        </div>
        <p className="text-gray-500 text-sm font-medium">{products.length} Products Found</p>
      </div>

      {/* Modern Filter Form */}
      <form className="grid grid-cols-1 md:grid-cols-12 gap-3 mb-12 bg-base-200/50 p-3 rounded-2xl border border-white/5 backdrop-blur-md">
        <div className="md:col-span-6 relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" size={18} />
          <input
            name="search"
            defaultValue={search}
            className="input bg-base-100 border-white/10 w-full pl-12 focus:border-teal-500 focus:outline-none rounded-xl"
            placeholder="Search our catalog..."
          />
        </div>
        <div className="md:col-span-4 relative">
          <SlidersHorizontal className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" size={18} />
          <select
            name="category"
            defaultValue={category}
            className="select bg-base-100 border-white/10 w-full pl-12 focus:border-teal-500 focus:outline-none rounded-xl appearance-none"
          >
            <option value="All">All Categories</option>
            <option value="Men">Men</option>
            <option value="Women">Women</option>
            <option value="Kids">Kids</option>
            <option value="Home Decor">Home Decor</option>
          </select>
        </div>
        <button type="submit" className="md:col-span-2 btn btn-teal-600 bg-teal-600 hover:bg-teal-500 border-none text-white font-bold rounded-xl shadow-lg shadow-teal-900/20">
          Filter
        </button>
      </form>

      {/* Optimized Grid: 2 for Mobile, 3 for Tablet, 5 for MD+ */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 md:gap-6">
        {products.map((product) => (
          <div 
            key={product._id.toString()} 
            className="group bg-base-200/40 backdrop-blur-sm border border-white/5 rounded-2xl overflow-hidden hover:border-teal-500/40 transition-all duration-500 flex flex-col"
          >
            {/* Image Container */}
            <div className="relative aspect-[4/5] overflow-hidden">
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-base-100/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-4">
                 <Link 
                  href={`/products/${product._id}`}
                  className="btn btn-xs btn-teal-500 w-full rounded-lg text-white border-none"
                >
                  Quick View
                </Link>
              </div>
            </div>

            {/* Product Info */}
            <div className="p-4 flex flex-col flex-grow">
              <div className="flex-grow">
                <p className="text-[10px] text-teal-500 font-bold uppercase tracking-wider mb-1">{product.category}</p>
                <h2 className="text-sm font-bold text-white line-clamp-1 group-hover:text-teal-400 transition-colors">
                  {product.title}
                </h2>
              </div>
              
              <div className="flex items-center justify-between mt-3">
                <p className="text-lg font-black text-white">${product.price}</p>
                <Link 
                  href={`/products/${product._id}`}
                  className="p-2 bg-white/5 rounded-full text-gray-400 hover:text-teal-500 hover:bg-teal-500/10 transition-all"
                >
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Empty State */}
      {products.length === 0 && (
        <div className="flex flex-col items-center justify-center py-32 text-center">
          <div className="w-20 h-20 bg-base-200 rounded-full flex items-center justify-center mb-6 border border-white/5">
            <Search className="text-gray-600" size={32} />
          </div>
          <h3 className="text-2xl font-bold text-white mb-2">No items found</h3>
          <p className="text-gray-500 max-w-xs">
            We could not find anything matching &quot;{search}&quot; in {category}. Try a different keyword.
          </p>
        </div>
      )}
    </div>
  );
}




