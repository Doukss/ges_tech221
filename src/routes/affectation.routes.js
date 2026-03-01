import { Router } from "express";
import * as controller from "../controllers/affectation.controller.js";
import { validate } from "../middlewares/validate.js";
import { createAffectationSchema } from "../validations/affectation.schema.js";

const router = Router();

/**
 * @swagger
 * /affectations:
 *   post:
 *     summary: Créer une nouvelle affectation
 *     tags: [Affectations]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Affectation'
 *     responses:
 *       201:
 *         description: Affectation créée avec succès
 *       400:
 *         $ref: '#/components/responses/BadRequest'
 */
router.post(
  "/",
  validate(createAffectationSchema),
  controller.createAffectation,
);

/**
 * @swagger
 * /affectations:
 *   get:
 *     summary: Lister toutes les affectations
 *     tags: [Affectations]
 *     responses:
 *       200:
 *         description: Liste des affectations
 */
router.get("/", controller.getAllAffectations);

/**
 * @swagger
 * /affectations/{id}:
 *   delete:
 *     summary: Supprimer une affectation
 *     tags: [Affectations]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Affectation supprimée avec succès
 *       404:
 *         $ref: '#/components/responses/NotFound'
 */
router.delete("/:id", controller.deleteAffectation);

export default router;
