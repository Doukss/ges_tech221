import * as affectationService from "../services/affectation.service.js";

export const createAffectation = async (req, res, next) => {
  try {
    const result = await affectationService.createAffectation(req.body);
    res.status(201).json(result);
  } catch (error) {
    next(error);
  }
};

export const getAllAffectations = async (req, res, next) => {
  try {
    const result = await affectationService.getAllAffectations();
    res.json(result);
  } catch (error) {
    next(error);
  }
};

export const deleteAffectation = async (req, res, next) => {
  try {
    const id = parseInt(req.params.id);
    const result = await affectationService.deleteAffectation(id);
    res.json(result);
  } catch (error) {
    next(error);
  }
};