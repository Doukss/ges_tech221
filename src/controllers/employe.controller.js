import * as employeService from "../services/employe.service.js";

export const createEmploye = async (req, res, next) => {
  try {
    const result = await employeService.createEmploye(req.body);
    res.status(201).json(result);
  } catch (error) {
    next(error);
  }
};

export const getAllEmployes = async (req, res, next) => {
  try {
    const result = await employeService.getAllEmployes();
    res.json(result);
  } catch (error) {
    next(error);
  }
};

export const updateEmploye = async (req, res, next) => {
  try {
    const id = parseInt(req.params.id);
    const result = await employeService.updateEmploye(id, req.body);
    res.json(result);
  } catch (error) {
    next(error);
  }
};

export const deleteEmploye = async (req, res, next) => {
  try {
    const id = parseInt(req.params.id);
    const result = await employeService.deleteEmploye(id);
    res.json({ message: "Employé supprimé avec succès", employe: result });
  } catch (error) {
    next(error);
  }
};