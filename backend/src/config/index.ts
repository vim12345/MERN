// backend/src/config/index.ts

import * as dotenv from 'dotenv';

dotenv.config();

const config = {
  // Define your configuration variables here
  port: process.env.PORT || 3000,
  database: {
    host: process.env.DB_HOST || 'localhost',
    port: process.env.DB_PORT || 27017,
    username: process.env.DB_USERNAME || '',
    password: process.env.DB_PASSWORD || '',
    databaseName: process.env.DB_NAME || 'your_database_name',
  },
  jwtSecret: process.env.JWT_SECRET || 'your_secret_key_for_jwt',
};

export default config;
