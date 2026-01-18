import { dbConnect } from "@/lib/mongodb";
import { ObjectId } from "mongodb";
import { NextResponse } from "next/server";

export async function GET(req, { params }) {
  try {
    const { id } = await params;
    if (!id || id === "undefined") {
      return NextResponse.json({ message: "Invalid ID" }, { status: 400 });
    }

    const productsCollection = await dbConnect("products");
    const product = await productsCollection.findOne({ _id: new ObjectId(id) });

    if (!product) {
      return NextResponse.json({ message: "Product not found" }, { status: 404 });
    }

    return NextResponse.json(product);
  } catch (error) {
    return NextResponse.json({ message: "Server Error" }, { status: 500 });
  }
}

export async function PUT(req, { params }) {
  try {
    const { id } = await params;
    const body = await req.json();
    const productsCollection = await dbConnect("products");

    // Filter out _id to prevent MongoDB immutable field errors
    const { _id, ...updateData } = body;

    const result = await productsCollection.updateOne(
      { _id: new ObjectId(id) },
      { $set: updateData }
    );

    return NextResponse.json({ success: true, modifiedCount: result.modifiedCount });
  } catch (error) {
    return NextResponse.json({ success: false, message: error.message }, { status: 500 });
  }
}

export async function DELETE(req, { params }) {
  try {
    const { id } = await params;
    const productsCollection = await dbConnect("products");

    const result = await productsCollection.deleteOne({ _id: new ObjectId(id) });

    if (result.deletedCount === 1) {
      return NextResponse.json({ success: true, message: "Deleted successfully" });
    }
    return NextResponse.json({ success: false, message: "Product not found" }, { status: 404 });
  } catch (error) {
    return NextResponse.json({ success: false, message: "Server error" }, { status: 500 });
  }
}