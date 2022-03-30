import mongoose, { Schema } from 'mongoose';

const carsSchema = new Schema({
  brand: {
    type: 'string',
    required: true,
  },
  model: {
    type: 'string',
    required: true,
  },
  manufactureYear: {
    type: 'string',
    required: true,
  },
  engineSize: {
    type: Number,
    required: true,
  },
  color: {
    type: 'string',
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
}, { timestamps: true });

const Cars = mongoose.model('cars', carsSchema);

export default Cars;
