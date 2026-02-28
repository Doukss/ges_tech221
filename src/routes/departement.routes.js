import { Router } from "express";
import * as controller from "../controllers/departement.controller.js";
import { validate } from "../middlewares/validate.js";
import { createDepartementSchema, updateDepartementSchema } from "../validations/departement.schema.js";

const router = Router();

router.post("/", validate(createDepartementSchema), controller.createDepartement);

router.get("/", controller.getAllDepartements);

router.put("/:id", validate(updateDepartementSchema), controller.updateDepartement);

router.patch("/:id/archive", controller.archiveDepartement);

router.delete("/:id", controller.deleteDepartement);

export default router;