import mongoose from "mongoose";
import { MONGO_URI } from "../config/env.js";

if (!MONGO_URI) {
  throw new Error("MongoURI is missing");
}

const connectDb = async () => {
  try {
    await mongoose.connect(MONGO_URI);
    console.log(`MongoDB connected`);
  } catch (error) {
    console.error("MongoDB connection failed", error);
  }
};
export default connectDb;
