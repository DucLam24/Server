import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import authRouter from "./api/router/auth.js";
import userRouter from "./api/router/user.js";
import videoRouter from "./api/router/videos.js";
import cookieParser from "cookie-parser";
// import cors from "cors";
import cors from "cors";

const app = express();
app.use(cors());
// mongodb connect

dotenv.config();

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO);
  } catch (error) {
    throw error;
  }
};

mongoose.connection.on("disconnected", () => {
  console.log("mongoDB disconnected!");
});

mongoose.connection.on("connected", () => {
  console.log("mongoDB connected!");
});
//middlewares

app.use(cookieParser());
app.use(express.json());

app.use("/api/auth", authRouter);

app.use("/api/user", userRouter);

app.use("/api/video", videoRouter);

app.use((err, req, res, next) => {
  const errorStatus = err.status || 500;
  const errorMessage = err.message || "Something went wrong!";
  return res.status(errorStatus).json({
    success: false,
    status: errorStatus,
    message: errorMessage,
    stack: err.stack,
  });
});

app.listen(4400, () => {
  connect();
  console.log("connected to backend.!!");
});
