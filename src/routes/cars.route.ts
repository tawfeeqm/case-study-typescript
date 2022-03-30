import express from 'express';
import validatePayloadSchema from '../middleware/payloadValidator';
import {
  postCars, getCars, getCarsCarId, deleteCarsCarId, putCarsCarIdPrice,
} from '../controllers/cars.controller';
import validateMongoDbId from '../modules/validator';
import postCarsSchema from '../payloadSchemas/cars/postCars';
import putCarsCarIdPriceSchema from '../payloadSchemas/cars/putCarsCarIdPrice';

const router: express.Router = express.Router();

router.post('/cars', validatePayloadSchema(postCarsSchema), postCars);
router.get('/cars', getCars);
router.get('/cars/:id', validateMongoDbId, getCarsCarId);
router.delete('/cars/:id', validateMongoDbId, deleteCarsCarId);
router.put('/cars/:id/price', validateMongoDbId, validatePayloadSchema(putCarsCarIdPriceSchema), putCarsCarIdPrice);

export default router;
