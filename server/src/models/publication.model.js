import mongoose from "mongoose";

const poublicacionSchema = new mongoose.Schema({
  user: {
    type: Object,
  },
  titulo: {
    type: String,
  },
  description: {
    type: String,
  },
  created_at: {
    type: String,
    default: new Date().getDate().toString(),
  },
});

export default mongoose.models.publication ||
  mongoose.model("publication", poublicacionSchema);
