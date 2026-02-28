import * as departementService from "../services/departement.service.js";

export const createDepartement = async (req, res, next) => {
  try {
    const result = await departementService.createDepartement(req.body);
    res.status(201).json(result);
  } catch (error) {
    next(error);
  }
};

// Get All............
export const getAllDepartements = async (req, res, next) => {
  try {
    const result = await departementService.getAllDepartements();
    res.json(result);
  } catch (error) {
    next(error);
  }
};

// Delete............
export const deleteDepartement = async (req, res, next) => {
  try {
    const id = parseInt(req.params.id);
    const result = await departementService.deleteDepartement(id);
    res.json(result);
  } catch (error) {
    next(error);
  }
};

// Update............
export const updateDepartement = async (req, res, next) => {
  try {
    const id = parseInt(req.params.id);
    const result = await departementService.updateDepartement(id, req.body);
    res.json(result);
  } catch (error) {
    next(error);
  }
};

// Archive.............
export const archiveDepartement = async (req, res, next) => {
  try {
    const id = parseInt(req.params.id);
    const result = await departementService.archiveDepartement(id);
    res.json({ message: "Département archivé avec succès", departement: result });
  } catch (error) {
    next(error);
  }
};