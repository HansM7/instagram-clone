import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  username: {
    //hans5 hans@gmail.com
    type: String,
  },
  password: {
    type: String,
  },
});

export default mongoose.models.user || mongoose.model("user", userSchema);
