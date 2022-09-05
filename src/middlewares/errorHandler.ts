import Status from '../controllers/enums/status';
import { NextFunction, Request, Response } from 'express';
import CustomError from '../errors/customError';

function errorHandler(
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) {
  if (err) {
    if (err instanceof CustomError) {
      return res.status(err.status || Status.BadRequest).json({
        message: err.message
      });
    }
  }
  next();
}

export default errorHandler;
