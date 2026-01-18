// src/app/api/products/route.js
import { dbConnect } from "@/lib/mongodb";
import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";

export async function GET() {
  try {
    const productsCollection = await dbConnect("products");
    const products = await productsCollection.find({}).toArray();
    return NextResponse.json(products);
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch" }, { status: 500 });
  }
}

export async function POST(req) {
  try {
    // 1. Security check: Only logged-in users can add products
    const session = await getServerSession();
    if (!session) {
      return NextResponse.json({ success: false, message: "Unauthorized" }, { status: 401 });
    }

    const body = await req.json();
    const productsCollection = await dbConnect("products");

    // 2. Format the data (ensure types are correct)
    const productData = {
      ...body,
      price: parseFloat(body.price),
      createdAt: new Date(),
      addedBy: session.user.email,
    };

    // 3. Insert into MongoDB
    const result = await productsCollection.insertOne(productData);

    return NextResponse.json({ 
      success: true, 
      message: "Product added!", 
      id: result.insertedId 
    }, { status: 201 });

  } catch (error) {
    console.error("Add product error:", error);
    return NextResponse.json({ success: false, message: "Server error" }, { status: 500 });
  }
}