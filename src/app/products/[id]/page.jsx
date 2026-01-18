// src/app/products/[id]/page.jsx
import { dbConnect } from "@/lib/mongodb";
import { ObjectId } from "mongodb";
import { notFound } from "next/navigation";
import Link from "next/link";
import { 
  ChevronLeft, 
  ShoppingBag, 
  ShieldCheck, 
  Truck, 
  RefreshCcw,
  Star
} from "lucide-react";

export default async function ProductDetails({ params }) {
  const resolvedParams = await params;
  const id = resolvedParams.id;

  if (!id || !ObjectId.isValid(id)) return notFound();

  const productsCollection = await dbConnect("products");
  const product = await productsCollection.findOne({ _id: new ObjectId(id) });

  if (!product) return notFound();

  return (
    <div className="min-h-screen bg-base-100 text-white pb-20">
      {/* Breadcrumb / Back Navigation */}
      <div className="px-6 md:px-16 lg:px-24 py-6">
        <Link 
          href="/products" 
          className="flex items-center gap-2 text-gray-500 hover:text-teal-500 transition-colors w-fit group"
        >
          <ChevronLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
          <span className="text-sm font-medium">Back to Collections</span>
        </Link>
      </div>

      <div className="px-6 md:px-16 lg:px-24 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
        
        {/* LEFT COLUMN: Image Gallery Style */}
        <div className="lg:col-span-7 space-y-6">
          <div className="relative aspect-square md:aspect-[4/5] bg-base-200/50 rounded-[2.5rem] overflow-hidden border border-white/5 backdrop-blur-sm group">
            {/* Subtle light glow behind image */}
            <div className="absolute inset-0 bg-teal-500/5 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
            
            <img 
              src={product.image} 
              alt={product.title} 
              className="w-full h-full object-contain p-8 md:p-12 relative z-10 drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)] transition-transform duration-700 hover:scale-105" 
            />
            
            <div className="absolute top-6 left-6">
              <span className="bg-teal-600/20 text-teal-400 border border-teal-500/30 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest backdrop-blur-md">
                {product.category}
              </span>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: Product Info */}
        <div className="lg:col-span-5 flex flex-col">
          <div className="mb-8">
            <div className="flex items-center gap-2 mb-4 text-amber-400">
              <div className="flex">
                {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
              </div>
              <span className="text-xs font-bold text-gray-500">(4.8 / 5.0)</span>
            </div>

            <h1 className="text-4xl md:text-5xl font-black mb-4 tracking-tight leading-tight">
              {product.title}
            </h1>
            
            <p className="text-3xl font-black text-teal-500 mb-6">
              ${product.price}
            </p>

            <div className="divider opacity-10"></div>

            <h3 className="text-sm font-bold uppercase tracking-widest text-gray-400 mb-3">Description</h3>
            <p className="text-gray-400 leading-relaxed mb-8">
              {product.longDesc || product.desc}
            </p>
          </div>

          {/* Action Buttons */}
          <div className="space-y-4 mb-10">
            <button className="btn btn-teal-600 w-full h-14 rounded-2xl text-white font-bold text-lg gap-3 shadow-lg shadow-teal-900/30 hover:scale-[1.02] active:scale-95 transition-all">
              <ShoppingBag size={22} />
              Add to Cart
            </button>
            <button className="btn btn-outline border-white/10 hover:bg-white/5 w-full h-14 rounded-2xl text-white font-bold transition-all">
              Add to Wishlist
            </button>
          </div>

          {/* Trust Badges - Modern Glass Style */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="p-4 bg-white/5 border border-white/5 rounded-2xl flex flex-col items-center text-center group hover:bg-white/10 transition-colors">
              <Truck size={24} className="text-teal-500 mb-2" />
              <span className="text-[10px] font-bold text-gray-400 uppercase tracking-tighter">Fast Delivery</span>
            </div>
            <div className="p-4 bg-white/5 border border-white/5 rounded-2xl flex flex-col items-center text-center group hover:bg-white/10 transition-colors">
              <RefreshCcw size={24} className="text-teal-500 mb-2" />
              <span className="text-[10px] font-bold text-gray-400 uppercase tracking-tighter">Easy Returns</span>
            </div>
            <div className="p-4 bg-white/5 border border-white/5 rounded-2xl flex flex-col items-center text-center group hover:bg-white/10 transition-colors">
              <ShieldCheck size={24} className="text-teal-500 mb-2" />
              <span className="text-[10px] font-bold text-gray-400 uppercase tracking-tighter">Secure Payment</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}



