import dotenv from 'dotenv';
import mongoDbConnection from 'interfaces/databaseConnection';

dotenv.config();

const config: mongoDbConnection = {
  URI: 'mongodb://mongo_db:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+1.3.0',
  OPTIONS: {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    socketTimeoutMS: 30000,
    keepAlive: true,
    maxPoolSize: 50,
  },
};

export default config;
