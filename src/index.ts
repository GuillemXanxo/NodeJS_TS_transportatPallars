import initializeServer from "./server/initializeServer";
import connectDB from "./dataBase";

const { app } = require("./server");

const port: number | string =
  process.env.PORT ?? process.env.LOCAL_PORT ?? 5000;

(async () => {
  try {
    await connectDB(process.env.MONGODB_STRING);
    await initializeServer(port, app);
  } catch (error) {
    process.exit(1);
  }
})();
