import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import actorRoutes from "./routes/actorRoutes.ts";
import filmRoutes from "./routes/filmRoutes.ts";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

mongoose
  .connect(process.env.MONGODB_URI as string)
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("MongoDB connection error:", err));

app.use("/api/actors", actorRoutes);
app.use("/api/films", filmRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
