import { Router } from "express";
import aiRoutes from "@/routes/ai.routes";
import flowRoutes from "@/routes/flow.routes";

const router = Router();

// route modules mapping
router.use("/ai", aiRoutes);
router.use("/flows", flowRoutes);

export default router;
