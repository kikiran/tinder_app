import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import connectDB from "./config/db.js";
import userRouter from "./routes/userRoute.js";
dotenv.config();

const port = process.env.PORT || 8081;
const app = express();

//middleware
app.use(express.json());
app.use(cookieParser());
app.use(cors({
  origin: "http://localhost:5173",
  credentials: true
}));

//routes end point
app.use("/api", userRouter);

app.listen(port,() => {
  connectDB();
  console.log(`App is running on ${port}`);
});
