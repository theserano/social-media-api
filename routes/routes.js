import express from "express";
import userRoutes from "./user_route.js";
import authRoutes from "./auth_route.js";
import postRoutes from "./post_routes.js";

const router = express.Router();


const baseURL = "api/v1"


router.use(`/${baseURL}/users`, userRoutes);
router.use(`/${baseURL}/auth`, authRoutes);
router.use(`/${baseURL}/posts`, postRoutes);

export default router;