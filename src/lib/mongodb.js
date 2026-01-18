// src/lib/mongodb.js
import "server-only";
import { MongoClient, ServerApiVersion } from "mongodb";

const uri = process.env.MONGODB_URI;
const dbName = process.env.DB_NAME; 

if (!uri) throw new Error("MONGODB_URI is missing in .env.local");

const options = {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
};

let client;
let clientPromise;

if (process.env.NODE_ENV === "development") {
  if (!global._mongoClientPromise) {
    client = new MongoClient(uri, options);
    global._mongoClientPromise = client.connect();
  }
  clientPromise = global._mongoClientPromise;
} else {
  client = new MongoClient(uri, options);
  clientPromise = client.connect();
}

// This replaces your dbConnect helper and makes it async-safe
export const dbConnect = async (collectionName) => {
  const conn = await clientPromise;
  return conn.db(dbName).collection(collectionName);
};

// Export the promise for NextAuth or other utilities
export default clientPromise;