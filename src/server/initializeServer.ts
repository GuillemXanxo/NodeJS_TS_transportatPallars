import chalk from "chalk";
import Debug from "debug";

const debug = Debug("pallars: initializeServer");

const initializeServer: Function = async (port: string | number, app: any) =>
  new Promise((resolve, reject) => {
    const server: any = app.listen(port, () => {
      debug(chalk.greenBright(`Server listening on http://localhost:${port}`));
      resolve(server);
    });

    server.on("error", (error: { status: string | number }) => {
      const errorMessage: string = `Couldn't start the server.${
        error.status === "EADDRINUSE" ? ` Port ${port} is busy` : ""
      }`;
      reject(new Error(errorMessage));
    });

    server.on("close", () => {
      debug(chalk.yellowBright("Server disconnected"));
    });
  });

export default initializeServer;
