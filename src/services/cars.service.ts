import throwError from '../modules/errorHelper';
import {
  insertOneNewCar, findCarRecords, findOneCarById, deleteCarById, updateOneCarPriceById,
} from '../models/collections/cars/cars.model';

const createCar = async (
  brand: string,
  model: string,
  manufactureYear: string,
  engineSize: number,
  color: string,
  price: number,
) => {
  const result: any = await insertOneNewCar(
    brand,
    model,
    manufactureYear,
    engineSize,
    color,
    price,
  );
  return result;
};

const getAllCars = async () => {
  const result = await findCarRecords();
  return result;
};

const getCarById = async (id: string) => {
  const result = await findOneCarById(id);
  if (!result) throwError(404, 'Resource not found');
  return result;
};

const delCarById = async (id: string) => {
  const carExists = await findOneCarById(id);
  if (!carExists) throwError(404, 'Resource not found');
  const result = await deleteCarById(id);
  return result;
};

const updateCarPriceById = async (id: string, price: Number) => {
  const carExists = await findOneCarById(id);
  if (!carExists) throwError(404, 'Resource not found');
  const result = await updateOneCarPriceById(id, price);
  return result;
};

export {
  createCar, getAllCars, getCarById, delCarById, updateCarPriceById,
};
