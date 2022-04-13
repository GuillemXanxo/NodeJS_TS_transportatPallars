import { ValidationError } from "express-validation";

export default interface ErrorInterface extends ValidationError {
  code: number;
}
