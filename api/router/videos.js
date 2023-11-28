import express from "express";
import { createVideo, getVideo, getVideos } from "../controllers/video.js";

const router = express.Router();

//CREATE
router.post("/", createVideo);

//GET
router.get("/:id", getVideo);

//GET ALL
router.get("/", getVideos);

export default router;
