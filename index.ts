import dotenv from "dotenv";
import chalk from "chalk";
import initializeServer from "./src/server/initializeServer";
import connectDB from "./dataBase/index";
import Debug from "debug";

const debug = Debug("pallars:root");
const { app } = require("./server/index");
dotenv.config();

const port: string | number = process.env.PORT || 3000;

(async () => {
  try {
    await connectDB(process.env.MONGODB_STRING);
    await initializeServer(port, app);
  } catch (error) {
    debug(chalk.redBright(`Error: `, error.message));
    process.exit(1);
  }
})();
