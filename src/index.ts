import { port, dataBaseString } from "./utils/environmentVariables";
import initializeServer from "./server/initializeServer";
import connectDB from "./dataBase";

const { app } = require("./server");

(async () => {
  try {
    await connectDB(dataBaseString);
    await initializeServer(port, app);
  } catch (error) {
    process.exit(1);
  }
})();
