import mongoose from "mongoose";

import { v4 as uuid } from "uuid";

const poublicacionSchema = new mongoose.Schema({
  id: {
    type: String,
    default: () => uuid(),
  },
  user: {
    type: Object,
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
