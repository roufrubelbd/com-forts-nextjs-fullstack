"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import Link from "next/link";

const RegisterPage = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const handleRegister = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    try {
      // Changed the URL to the local Next.js API route
      const res = await fetch("/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password }),
      });

      const data = await res.json();

      if (!res.ok) {
        toast.error(data.message || "Registration failed");
        setLoading(false);
        return;
      }

      toast.success("Account created successfully!");
      router.push("/login");
    } catch (err) {
      toast.error("An error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-[80vh]">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl border border-teal-100">
        <div className="card-body">
          <h2 className="text-2xl font-bold text-center text-teal-600">Register</h2>
          <form className="space-y-4" onSubmit={handleRegister}>
            <div className="form-control">
              <label className="label">Full Name</label>
              <input name="name" type="text" className="input input-bordered" placeholder="Your Name" required />
            </div>

            <div className="form-control">
              <label className="label">Email</label>
              <input name="email" type="email" className="input input-bordered" placeholder="Email" required />
            </div>

            <div className="form-control">
              <label className="label">Password</label>
              <input name="password" type="password" className="input input-bordered" placeholder="Password" required />
            </div>

            <button type="submit" className="btn bg-teal-600 hover:bg-teal-700 text-white w-full" disabled={loading}>
              {loading ? <span className="loading loading-spinner"></span> : "Create Account"}
            </button>
          </form>
          <p className="text-center text-sm mt-4">
            Already have an account? <Link href="/login" className="text-teal-600 font-bold">Login</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;