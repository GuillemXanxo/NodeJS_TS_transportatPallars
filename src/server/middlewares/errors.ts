import * as express from "express";
import Debug from "debug";
import chalk from "chalk";
import ErrorInterface from "../../interfaces/error";

const debug = Debug("pallars:errors");

export const notFoundError = (req: express.Request, res: express.Response) => {
  debug(chalk.red(`Error: 404`));
  res.status(404).json({ error: true, message: "Endpoint not found" });
};

// eslint-disable-next-line no-unused-vars
export const generalError = (
  error: ErrorInterface,
  req: express.Request,
  res: express.Response,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  next: express.NextFunction
) => {
  debug(chalk.red(`Error: ${error.message}`));
  const errorCode = error.code ?? 500;
  const errorMessage = error.message ? error.message : "General fail";
  res.status(errorCode).json({ error: true, message: errorMessage });
};
