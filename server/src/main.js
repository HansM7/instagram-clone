import express from "express";
import authRouter from "./routes/auth.route.js";
import cors from "cors";
import publicationRouter from "./routes/publication.route.js";

const app = express();

app.use(express.json());

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

app.use("/api", authRouter);
app.use("/api", publicationRouter);

app.listen(3333);
