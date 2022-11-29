import { Sequelize } from "sequelize-typescript";
import { config as dotEnv } from "dotenv";

dotEnv();

const env = process.env.NODE_ENV
const dialect = env === 'test' ? 'sqlite' : 'postgres'

export const sequelize = new Sequelize({
  username: process.env.DB_USER || "postgres",
  password: process.env.DB_PASS || "1234",
  database: process.env.DB_NAME || "article",
  host: process.env.DB_HOST || "localhost",
  port: parseInt(process.env.DB_PORT || '5432'),
  dialect,
});
