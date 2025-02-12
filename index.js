import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import "dotenv/config";
import auth from "./routes/auth.js";

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log("DB connected Successfully");
  })
  .catch((err) => {
    console.log("Failed to connect DB : " + err.message);
  });

const app = express();

app.use(express.json());
app.use(
  cors({
    origin: [
      "http://localhost:3000",
      "https://hackathon-frontend-nextjs-2025.vercel.app",
    ],
    credentials: true,
  })
);

app.use("/auth", auth);
app.use("/loan", auth); // Add this line

app.listen(process.env.PORT, () => {
  console.log(`Server is running at : http://localhost:${process.env.PORT}`);
});
