import express, { Application } from "express";
import morgan from "morgan";
import cors from "cors";
import helmet from "helmet";

const app: Application = express();

app.use(cors());
app.use(helmet());
app.use(morgan("dev"));
app.use(express.json());

export default { app };
