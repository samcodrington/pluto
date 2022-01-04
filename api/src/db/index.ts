import mongoose from 'mongoose';
const DB_HOST = process.env.DB_HOST;
const DB_PORT = process.env.DB_PORT;
const DB_TABLE_NAME = process.env.DB_TABLE_NAME;

export async function initDB() {
  await mongoose.connect(`mongodb://${DB_HOST}:${DB_PORT}/${DB_TABLE_NAME}`);
  console.log('connected to DB');
}