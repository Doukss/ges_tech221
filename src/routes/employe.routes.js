import { Router } from "express";
import * as controller from "../controllers/employe.controller.js";
import { validate } from "../middlewares/validate.js";
import {
  createEmployeSchema,
  updateEmployeSchema,
} from "../validations/employe.schema.js";

const router = Router();

/**
 * @swagger
 * /employes:
 *   post:
 *     summary: Créer un nouvel employé
 *     tags: [Employés]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Employe'
 *     responses:
 *       201:
 *         description: Employé créé avec succès
 *       400:
 *         $ref: '#/components/responses/BadRequest'
 */
router.post("/", validate(createEmployeSchema), controller.createEmploye);

/**
 * @swagger
 * /employes:
 *   get:
 *     summary: Lister tous les employés
 *     tags: [Employés]
 *     responses:
 *       200:
 *         description: Liste des employés
 */
router.get("/", controller.getAllEmployes);

/**
 * @swagger
 * /employes/{id}:
 *   put:
 *     summary: Modifier un employé
 *     tags: [Employés]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Employé modifié avec succès
 *       400:
 *         $ref: '#/components/responses/BadRequest'
 *       404:
 *         $ref: '#/components/responses/NotFound'
 */
router.put("/:id", validate(updateEmployeSchema), controller.updateEmploye);

/**
 * @swagger
 * /employes/{id}:
 *   delete:
 *     summary: Supprimer un employé
 *     tags: [Employés]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Employé supprimé avec succès
 *       404:
 *         $ref: '#/components/responses/NotFound'
 */
router.delete("/:id", controller.deleteEmploye);

export default router;
