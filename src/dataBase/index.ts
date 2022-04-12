import chalk from "chalk";
import mongoose from "mongoose";
import Debug from "debug";

const debug = Debug("pallars: connectDB");

const connectDB = (connectionString: string | undefined) =>
  new Promise<void>((resolve, reject) => {
    mongoose.set("returnOriginal", false);
    mongoose.set("toJSON", {
      virtuals: true,
      transform: (doc, ret) => {
        // eslint-disable-next-line no-param-reassign, no-underscore-dangle
        delete ret._id;
        // eslint-disable-next-line no-param-reassign, no-underscore-dangle
        delete ret.__v;
      },
    });
    mongoose.connect(connectionString!, (error) => {
      if (error) {
        debug(chalk.red("Connection refused!"));
        debug(chalk.red(error.message));
        reject(error);
        return;
      }
      debug(chalk.bold.greenBright(`Database connected`));
      resolve();
    });
  });

export default connectDB;
