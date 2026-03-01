import { Router } from "express";
import * as controller from "../controllers/departement.controller.js";
import { validate } from "../middlewares/validate.js";
import {
  createDepartementSchema,
  updateDepartementSchema,
} from "../validations/departement.schema.js";

const router = Router();

/**
 * @swagger
 * /departements:
 *   post:
 *     summary: Créer un nouveau département
 *     tags: [Départements]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Departement'
 *     responses:
 *       201:
 *         description: Département créé avec succès
 *       400:
 *         $ref: '#/components/responses/BadRequest'
 */
router.post(
  "/",
  validate(createDepartementSchema),
  controller.createDepartement,
);

/**
 * @swagger
 * /departements:
 *   get:
 *     summary: Lister tous les départements
 *     tags: [Départements]
 *     responses:
 *       200:
 *         description: Liste des départements
 */
router.get("/", controller.getAllDepartements);

/**
 * @swagger
 * /departements/{id}:
 *   put:
 *     summary: Modifier un département
 *     tags: [Départements]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Département modifié avec succès
 *       400:
 *         $ref: '#/components/responses/BadRequest'
 *       404:
 *         $ref: '#/components/responses/NotFound'
 */
router.put(
  "/:id",
  validate(updateDepartementSchema),
  controller.updateDepartement,
);

/**
 * @swagger
 * /departements/{id}/archive:
 *   patch:
 *     summary: Archiver un département
 *     tags: [Départements]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Département archivé avec succès
 *       404:
 *         $ref: '#/components/responses/NotFound'
 */
router.patch("/:id/archive", controller.archiveDepartement);

/**
 * @swagger
 * /departements/{id}:
 *   delete:
 *     summary: Supprimer un département
 *     tags: [Départements]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Département supprimé avec succès
 *       404:
 *         $ref: '#/components/responses/NotFound'
 */
router.delete("/:id", controller.deleteDepartement);

export default router;
