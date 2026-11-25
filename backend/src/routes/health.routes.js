import { Router } from "express";
import mongoose from "mongoose";
import { sendSuccess } from "../utils/apiResponse.js";

const router = Router();
const dbStates = ["disconnected", "connected", "connecting", "disconnecting"];

router.get("/", (req, res) => {
  sendSuccess(
    res,
    {
      status: "ok",
      uptime: process.uptime(),
      timestamp: new Date().toISOString(),
      database: dbStates[mongoose.connection.readyState],
    },
    "AcroConnect API is running"
  );
});

export default router;
