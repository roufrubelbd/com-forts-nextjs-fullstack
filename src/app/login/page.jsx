"use client";

import React, { useState, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import toast from "react-hot-toast";
import Link from "next/link";
import { signIn } from "next-auth/react";
import { LogIn } from "lucide-react";

// 1. Move the logic into a sub-component
const LoginForm = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [loading, setLoading] = useState(false);
  
  const callbackUrl = searchParams.get("callbackUrl") || "/";

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);

    const email = e.target.email.value;
    const password = e.target.password.value;

    const result = await signIn("credentials", {
      email,
      password,
      redirect: false, 
    });

    if (result?.error) {
      toast.error("Invalid email or password");
      setLoading(false);
    } else {
      toast.success("Welcome back!");
      router.push(callbackUrl);
      router.refresh(); 
    }
  };

  return (
    <div className="card bg-base-200/50 backdrop-blur-xl w-full max-w-md shrink-0 shadow-2xl border border-white/5 p-4 md:p-8">
      <div className="flex flex-col items-center mb-8">
        <div className="w-16 h-16 bg-teal-500/10 rounded-2xl flex items-center justify-center mb-4 border border-teal-500/20">
            <LogIn className="text-teal-500" size={32} />
        </div>
        <h2 className="text-3xl font-black text-white">Welcome Back</h2>
        <p className="text-gray-500 text-sm mt-2">Enter your credentials to access Comforts</p>
      </div>

      <form className="space-y-5" onSubmit={handleLogin}>
        <div className="form-control">
          <label className="label text-xs uppercase tracking-widest font-bold text-gray-500">Email Address</label>
          <input 
            name="email" 
            type="email" 
            className="input bg-base-100 border-white/10 focus:border-teal-500 focus:outline-none rounded-xl h-12" 
            placeholder="name@company.com" 
            required 
          />
        </div>

        <div className="form-control">
          <label className="label text-xs uppercase tracking-widest font-bold text-gray-500">Password</label>
          <input 
            name="password" 
            type="password" 
            className="input bg-base-100 border-white/10 focus:border-teal-500 focus:outline-none rounded-xl h-12" 
            placeholder="••••••••" 
            required 
          />
        </div>

        <button 
            type="submit" 
            className="btn btn-teal-600 bg-teal-600 hover:bg-teal-500 border-none text-white w-full h-12 rounded-xl font-bold shadow-lg shadow-teal-900/20 transition-all active:scale-95" 
            disabled={loading}
        >
          {loading ? <span className="loading loading-spinner"></span> : "Sign In"}
        </button>
      </form>

      <div className="divider text-[10px] uppercase tracking-[0.2em] my-8 opacity-30">Or continue with</div>

      <button 
        onClick={() => signIn("google", { callbackUrl })}
        className="btn bg-white/5 border-white/10 hover:bg-white/10 w-full h-12 rounded-xl text-white font-bold transition-all"
      >
        <svg className="w-5 h-5 mr-2" viewBox="0 0 48 48">
            <path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"></path>
            <path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"></path>
            <path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"></path>
            <path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"></path>
        </svg>
        Google
      </button>

      <p className="text-center text-sm mt-8 text-gray-500">
        New here? <Link href="/register" className="text-teal-500 font-bold hover:underline transition-all">Create an account</Link>
      </p>
    </div>
  );
};

// 2. Main Page Component with Suspense Boundary
const LoginPage = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-base-100 px-6">
      <Suspense fallback={
        <div className="flex flex-col items-center gap-4">
            <span className="loading loading-ring loading-lg text-teal-500"></span>
            <p className="text-gray-500 animate-pulse text-sm">Preparing secure login...</p>
        </div>
      }>
        <LoginForm />
      </Suspense>
    </div>
  );
};

export default LoginPage;