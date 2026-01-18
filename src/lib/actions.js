"use server";

import { dbConnect } from "@/lib/mongodb"; 
import { ObjectId } from "mongodb";
import { revalidatePath } from "next/cache";

// DELETE PRODUCT
export async function deleteProduct(id) {
  const collection = await dbConnect("products");
  await collection.deleteOne({ _id: new ObjectId(id) });
  revalidatePath("/products");
}

// ADD PRODUCT
export async function addProduct(formData) {
  const collection = await dbConnect("products");

  const product = {
    title: formData.get("title"),
    price: parseFloat(formData.get("price")), 
    category: formData.get("category"),
    date: new Date(),
  };

  await collection.insertOne(product);
  revalidatePath("/products");
}