import * as projetService from "../services/projet.service.js";

export const createProjet = async (req, res, next) => {
  try {
    const result = await projetService.createProjet(req.body);
    res.status(201).json(result);
  } catch (error) {
    next(error);
  }
};

export const getAllProjets = async (req, res, next) => {
  try {
    const result = await projetService.getAllProjets();
    res.json(result);
  } catch (error) {
    next(error);
  }
};

export const archiveProjet = async (req, res, next) => {
  try {
    const id = parseInt(req.params.id);
    const result = await projetService.archiveProjet(id);
    res.json(result);
  } catch (error) {
    next(error);
  }
};

export const deleteProjet = async (req, res, next) => {
  try {
    const id = parseInt(req.params.id);
    const result = await projetService.deleteProjet(id);
    res.json(result);
  } catch (error) {
    next(error);
  }
};

