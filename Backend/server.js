import express from "express"
import dotenv from "dotenv"
import connectDB from "./config/db.js";
import authRouter from "./routes/auth.routes.js";
import cookieParser from "cookie-parser";
dotenv.config()

const port = process.env.PORT || 5500;

const app = express();
app.use(express.json())
app.use(cookieParser())

app.use("/api/auth", authRouter)

const startServer = async () => {
  try {
    await connectDB();
    app.listen(port, () => {
      console.log(`Server running on port ${port}`);
    });
  } catch (err) {
    console.log("Failed to start server:", err);
  }
}

startServer();
