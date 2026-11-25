import { Router } from "express";
import healthRoutes from "./health.routes.js";

const router = Router();

router.use("/health", healthRoutes);
// Future modules get mounted here, e.g.:
// router.use("/auth", authRoutes);

export default router;
