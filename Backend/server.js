import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import authRouter from "./routes/auth.routes.js";
import cookieParser from "cookie-parser";
dotenv.config()
import cors from "cors";

const port = process.env.PORT || 5500;

const app = express();
app.use(express.json())
app.use(cookieParser())
app.use(cors({
  origin: "http://localhost:5173",
  credentials: true
}))

app.use("/api/auth", authRouter)

app.get("/", (req,res) => {
  res.send("Server is running.");
})

const startServer = async () => {
  try {
    await connectDB();
    app.listen(port, () => {
      console.log(`Server running on port ${port}`);
      console.log("http://localhost:8080/");
    });
  } catch (err) {
    console.log("Failed to start server:", err);
  }
}

startServer();
