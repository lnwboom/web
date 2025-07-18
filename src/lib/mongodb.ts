import mongoose from 'mongoose';

const MONGODB_URI = process.env.MONGODB_URI || '';

if (!MONGODB_URI) {
  throw new Error('Please define the MONGODB_URI environment variable');
}

let cached = (globalThis as { mongoose?: { conn: unknown; promise: Promise<typeof import('mongoose')> | null } }).mongoose;

if (!cached) {
  cached = { conn: null, promise: null };
  (globalThis as { mongoose?: { conn: unknown; promise: Promise<typeof import('mongoose')> | null } }).mongoose = cached;
}

let dbConnected = false;

mongoose.connection.on('connected', () => {
  dbConnected = true;
  console.log('✅ MongoDB connected');
});
mongoose.connection.on('disconnected', () => {
  dbConnected = false;
  console.log('❌ MongoDB disconnected');
});
mongoose.connection.on('error', (err) => {
  dbConnected = false;
  console.error('❌ MongoDB connection error:', err);
});

async function dbConnect() {
  if (!cached) throw new Error('Mongoose cache is undefined');
  if (cached.conn) return cached.conn;
  if (!cached.promise) {
    cached.promise = mongoose.connect(MONGODB_URI, {
      bufferCommands: false,
    }).then((mongoose) => mongoose);
  }
  cached.conn = await cached.promise;
  return cached.conn;
}

export { dbConnected };
export default dbConnect; 