import express from 'express';
import {
  createCar, getAllCars, getCarById, delCarById, updateCarPriceById,
} from '../services/cars.service';

const postCars = async (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction,
) => {
  const { brand } = req.body;
  const { model } = req.body;
  const { manufactureYear } = req.body;
  const { engineSize } = req.body;
  const { color } = req.body;
  const { price } = req.body;
  createCar(brand, model, manufactureYear, engineSize, color, price)
    .then(() => res.status(201).end())
    .catch((error: Object) => next(error));
};

const getCars = async (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction,
) => {
  getAllCars()
    .then((result) => res.status(200).send(result))
    .catch((error) => next(error));
};

const getCarsCarId = async (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction,
) => {
  const { id } = req.params;
  getCarById(id)
    .then((result) => res.status(200).send(result))
    .catch((error) => next(error));
};

const deleteCarsCarId = async (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction,
) => {
  const { id } = req.params;
  delCarById(id)
    .then(() => res.status(204).end())
    .catch((error) => next(error));
};

const putCarsCarIdPrice = async (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction,
) => {
  const { id } = req.params;
  const { price } = req.body;
  updateCarPriceById(id, price)
    .then(() => res.status(204).end())
    .catch((error) => next(error));
};

export
{
  postCars, getCars, getCarsCarId, deleteCarsCarId, putCarsCarIdPrice,
};
