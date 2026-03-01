import { Router } from "express";
import * as controller from "../controllers/projet.controller.js";
import { validate } from "../middlewares/validate.js";
import { createProjetSchema } from "../validations/projet.schema.js";

const router = Router();

/**
 * @swagger
 * tags:
 *   name: Projets
 *   description: Gestion des projets
 */

/**
 * @swagger
 * /projets:
 *   post:
 *     summary: Créer un nouveau projet
 *     tags: [Projets]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Projet'
 *     responses:
 *       201:
 *         description: Projet créé avec succès
 *       400:
 *         $ref: '#/components/responses/BadRequest'
 */
router.post("/", validate(createProjetSchema), controller.createProjet);

/**
 * @swagger
 * /projets:
 *   get:
 *     summary: Lister tous les projets
 *     tags: [Projets]
 *     responses:
 *       200:
 *         description: Liste des projets
 */
router.get("/", controller.getAllProjets);

/**
 * @swagger
 * /projets/{id}/archive:
 *   patch:
 *     summary: Archiver un projet
 *     tags: [Projets]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Projet archivé avec succès
 *       404:
 *         $ref: '#/components/responses/NotFound'
 */
router.patch("/:id/archive", controller.archiveProjet);

/**
 * @swagger
 * /projets/{id}:
 *   delete:
 *     summary: Supprimer un projet
 *     tags: [Projets]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Projet supprimé avec succès
 *       404:
 *         $ref: '#/components/responses/NotFound'
 */
router.delete("/:id", controller.deleteProjet);

export default router;
