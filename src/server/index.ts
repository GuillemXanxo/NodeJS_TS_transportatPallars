import express, { Application } from "express";
import chalk from "chalk";
import morgan from "morgan";
import cors from "cors";
import helmet from "helmet";
import Debug from "debug";

const debug = Debug("pallars: indexServer");
const app: Application = express();

app.use(cors());
app.use(helmet());
app.use(morgan("dev"));
app.use(express.json());

module.exports = { app };
