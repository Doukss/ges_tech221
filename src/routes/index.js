import { Router } from "express";
import departementRoutes from "./departement.routes.js";

const router = Router();

router.use("/departements", departementRoutes);

export default router;