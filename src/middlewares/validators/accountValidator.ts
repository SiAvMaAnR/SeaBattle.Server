import Status from '../../controllers/enums/status';
import { NextFunction, Request, Response } from 'express';

class AccountValidator {
  public static login(req: Request, res: Response, next: NextFunction) {
    req
      .checkBody('login')
      .isLength({ min: 6, max: 20 })
      .withMessage('Incorrect login!');
    req
      .checkBody('password')
      .isLength({ min: 6, max: 20 })
      .withMessage('Incorrect password!');

    const errors = req.validationErrors();
    if (errors) {
      return res.status(Status.BadRequest).json({
        errors: errors
      });
    }

    next();
  }

  public static register(req: Request, res: Response, next: NextFunction) {
    req
      .checkBody('login')
      .isLength({ min: 6, max: 20 })
      .withMessage('Incorrect login!');
    req
      .checkBody('password')
      .isLength({ min: 6, max: 20 })
      .withMessage('Incorrect password!');

    const errors = req.validationErrors();
    if (errors) {
      return res.status(Status.BadRequest).json({
        errors: errors
      });
    }

    next();
  }
}

export default AccountValidator;
