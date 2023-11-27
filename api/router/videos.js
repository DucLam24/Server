import express from "express";
import { createVideo, getVideo, getVideos } from "../controllers/video.js";
import { verifyAdmin } from "../utils/verifyToken.js";

const router = express.Router();

//CREATE
router.post("/:hotelid", verifyAdmin, createVideo);

//GET
router.get("/:id", getVideo);

//GET ALL
router.get("/", getVideos);

export default router;
