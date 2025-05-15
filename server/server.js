import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
dotenv.config();

const port = process.env.PORT || 8081;
const app = express();

//middleware
app.use(express.json());
app.use(cors({ credentials: true }));

app.listen(() => {
  connectDB();
  console.log(`App is running on ${port}`);
});
