import dotenv from "dotenv";

dotenv.config();

export const port = process.env.PORT ?? 5000;
export const dataBaseString = process.env.MONGODB_STRING;