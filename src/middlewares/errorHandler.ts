import Status from "../controllers/enums/status";
import { NextFunction,Request, Response } from "express";

function errorHandler(err: CustomError, req: Request, res: Response, next: NextFunction) {
    if (err) {
        return res.status(err.status || Status.BadRequest).json({
            message: err.message
        });
    }
    next();
}

export default errorHandler;