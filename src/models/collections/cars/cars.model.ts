import Car from '../../schemas/cars';

const insertOneNewCar = async (
  brand: string,
  model: string,
  manufactureYear: string,
  engineSize: Number,
  color: string,
  price: Number,
) => {
  const newCar = new Car({
    brand,
    model,
    manufactureYear,
    engineSize,
    color,
    price,
  });
  const result = await newCar.save();
  return result;
};

const findCarRecords = async () => {
  const result = await Car.find();
  return result;
};

const findOneCarById = async (id: string) => {
  const result = await Car.findById(id);
  return result;
};

const deleteCarById = async (id: string) => {
  const result = await Car.findByIdAndDelete(id);
  return result;
};

const updateOneCarPriceById = async (id: string, price: Number) => {
  const result = await Car.updateOne(
    {
      _id: id,
    },
    {
      price,
    },
  );
  return result;
};

export {
  insertOneNewCar, findCarRecords, findOneCarById, deleteCarById, updateOneCarPriceById,
};
