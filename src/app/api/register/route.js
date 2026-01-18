// src/app/api/register/route.js
import { dbConnect } from "@/lib/mongodb";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const { name, email, password } = await req.json();

    if (!name || !email || !password) {
      return NextResponse.json({ success: false, message: "Missing fields" }, { status: 400 });
    }

    const usersCollection = await dbConnect("users");

    // Check if user exists
    const existingUser = await usersCollection.findOne({ email });
    if (existingUser) {
      return NextResponse.json({ success: false, message: "User already exists" }, { status: 409 });
    }

    // In a real app, hash the password here using bcryptjs
    await usersCollection.insertOne({ name, email, password });

    return NextResponse.json({ success: true, message: "Registered successfully" }, { status: 201 });
  } catch (error) {
    console.error("Registration error:", error);
    return NextResponse.json({ success: false, message: "Server error" }, { status: 500 });
  }
}