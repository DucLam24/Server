import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import authRouter from "./api/router/auth.js";
import userRouter from "./api/router/user.js";
import hotelRouter from "./api/router/hotels.js";
import roomRouter from "./api/router/rooms.js";
import cookieParser from "cookie-parser";

const app = express();

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

app.use("/api/hotel", hotelRouter);

app.use("/api/auth", authRouter);

app.use("/api/user", userRouter);

app.use("/api/room", roomRouter);

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
