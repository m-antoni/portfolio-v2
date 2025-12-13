// lib/dbConnect.ts

import mongoose from "mongoose";

// Define the type for the cached connection object
interface Cached {
  conn: typeof mongoose | null;
  promise: Promise<typeof mongoose> | null;
}

// Check for the MongoDB URI in environment variables
const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
  throw new Error(
    "Please define the MONGODB_URI environment variable inside .env.local"
  );
}

// Extend the global object to include the cached connection
// Note: 'any' is used here because global is a plain object in Node.js, and we are dynamically adding a property.
declare global {
  var mongoose: Cached;
}

// Initialize the cached object
let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

/**
 * Global database connection function for Next.js API Routes/Server Components.
 * Caches the connection to prevent reconnecting on every request.
 * @returns {Promise<typeof mongoose>} The Mongoose connection instance.
 */
async function dbConnect(): Promise<typeof mongoose> {
  if (cached.conn) {
    console.log("Using cached database connection");
    return cached.conn;
  }

  if (!cached.promise) {
    const opts = {
      bufferCommands: false,
    };

    console.log("Connecting to database...");

    // Start the connection promise
    cached.promise = mongoose
      .connect(MONGODB_URI!, opts)
      .then((mongooseInstance) => {
        console.log("Database connection established");
        return mongooseInstance;
      });
  }

  // Await the promise to resolve and store the resolved connection instance
  try {
    cached.conn = await cached.promise;
  } catch (e) {
    cached.promise = null;
    throw e;
  }

  return cached.conn;
}

export default dbConnect;
