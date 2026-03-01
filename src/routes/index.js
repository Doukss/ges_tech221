import { Router } from "express";
import departementRoutes from "./departement.routes.js";
import employeRoutes from "./employe.routes.js";
import projetRoutes from "./projet.routes.js";
import affectationRoutes from "./affectation.routes.js";

const router = Router();

router.use("/departements", departementRoutes);
router.use("/employes", employeRoutes);
router.use("/projets", projetRoutes);
router.use("/affectations", affectationRoutes);

export default router;