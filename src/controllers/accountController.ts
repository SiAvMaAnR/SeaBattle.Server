import BaseController from './baseController';
import { NextFunction, Request, Response } from 'express';
import JWT from '../helpers/jwt';
import AccountService from '../services/accountService';
import IAccountService from '../services/interfaces/IAccountService';
import Status from './enums/status';
import { validationResult } from 'express-validator';

class AccountController extends BaseController {
  private accountService: IAccountService = new AccountService();

  public async login(req: Request, res: Response, next: NextFunction) {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(Status.BadRequest).json({ errors: errors.array() });
      }

      const login = req.body.login;
      const password = req.body.password;

      const user = await this.accountService.getUserByLogin(login);

      if (!user) {
        throw {
          status: Status.NotFound,
          message: 'User not found!'
        };
      }

      if (user?.password !== password) {
        throw {
          status: Status.BadRequest,
          message: 'Invalid password!'
        };
      }

      return res.status(Status.Ok).json({
        type: 'Bearer',
        token: JWT.generateToken({
          id: user.id,
          login: login
        })
      });
    } catch (err) {
      next(err);
    }
  }

  public async register(req: Request, res: Response, next: NextFunction) {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(Status.BadRequest).json({ errors: errors.array() });
      }

      const login = req.body.login;
      const password = req.body.password;

      const user = await this.accountService.getUserByLogin(login);

      if (user) {
        throw {
          message: 'User already exists!'
        };
      }

      const newUser = await this.accountService.createUser({
        login,
        password
      });

      return res.status(Status.Ok).json({
        data: newUser,
        message: 'Success!'
      });
    } catch (err) {
      next(err);
    }
  }

  public async info(req: Request, res: Response, next: NextFunction) {
    try {
      return res.status(Status.Ok).json({
        data: req['user'],
        message: 'Success!'
      });
    } catch (err) {
      next(err);
    }
  }
}

export default AccountController;
