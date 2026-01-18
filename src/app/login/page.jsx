"use client";

import React, { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import toast from "react-hot-toast";
import Link from "next/link";
import { signIn } from "next-auth/react";

const LoginPage = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [loading, setLoading] = useState(false);
  
  // Get the URL the user was trying to reach before being redirected to login
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
    <div className="flex justify-center items-center min-h-[80vh]">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl border border-teal-100">
        <div className="card-body">
          <h2 className="text-2xl font-bold text-center text-teal-600">Login</h2>
          <form className="space-y-4" onSubmit={handleLogin}>
            <div className="form-control">
              <label className="label">Email</label>
              <input name="email" type="email" className="input input-bordered" placeholder="Email" required />
            </div>

            <div className="form-control">
              <label className="label">Password</label>
              <input name="password" type="password" className="input input-bordered" placeholder="Password" required />
            </div>

            <button type="submit" className="btn bg-teal-600 hover:bg-teal-700 text-white w-full" disabled={loading}>
              {loading ? <span className="loading loading-spinner"></span> : "Login"}
            </button>
          </form>

          <div className="divider text-xs">OR</div>

          <button 
            onClick={() => signIn("google", { callbackUrl })}
            className="btn btn-outline w-full"
          >
            <svg className="w-5 h-5 mr-2" viewBox="0 0 48 48"><path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"></path><path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"></path><path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"></path><path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"></path></svg>
            Google
          </button>

          <p className="text-center text-sm mt-4">
            New here? <Link href="/register" className="text-teal-600 font-bold">Register</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;