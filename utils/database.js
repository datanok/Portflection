// utils/db.js
import mongoose from 'mongoose';

if (!process.env.MONGODB_URI) {
  throw new Error('Please add MongoDB URI to .env file')
}

let cached = global.mongoose

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null }
}

export async function connectToDB() {
  if (cached.conn) {
    return cached.conn
  }

  if (!cached.promise) {
    const opts = {
      bufferCommands: false,
      dbName: "portflection",
    }

    cached.promise = mongoose.connect(process.env.MONGODB_URI, opts).then((mongoose) => {
      return mongoose
    })
  }

  try {
    cached.conn = await cached.promise
    console.log('MongoDB connected successfully')
    return cached.conn
  } catch (e) {
    cached.promise = null
    throw e
  }
}