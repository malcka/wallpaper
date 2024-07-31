// getting-started.js
import mongoose from 'mongoose';
export async function connectToDB() {
  try {
    await mongoose.connect('mongodb://127.0.0.1:27017/wallpapere');
    console.log("MongoDB connected");
  } catch (err) {
    console.error("Failed to connect to MongoDB", err);
  }
}