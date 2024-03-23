import mongoose from "mongoose";

export async function connectionToDatabase() {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/app-instagram");
  } catch (err) {
    console.log(err);
  }
}
