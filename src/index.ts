import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import mongoDbConfig from './config/database';
import carsRouter from './routes/cars.route';
import errorObj from './interfaces/error';

const port: any = process.env.PORT || '4242';
const app: express.Application = express();
const host: string = '0.0.0.0';

/** Connect to Mongo DB */
mongoose
  .connect(mongoDbConfig.URI, mongoDbConfig.OPTIONS)
  .then(() => {
    console.log('Established connection to the database');
    app.listen(port, host, () => {
      console.log(`Server started on port ${port}`);
    });
  })
  .catch((error) => console.log('Failed to establish connection with Mongo DB', error));

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use('/v1/api', carsRouter);

app.use(
  // eslint-disable-next-line no-unused-vars
  (error: errorObj, req: express.Request, res: express.Response, next: express.NextFunction) => {
    let code: number;
    let msg: string;
    if (error.code && error.msg) {
      code = error.code;
      msg = error.msg;
    } else {
      code = 500;
      msg = 'Internal server error.';
    }
    console.log(error);
    res.status(code).json({ code, msg });
  },
);
