import BaseController from './baseController';
import UserService from '../services/userService';
import { NextFunction, Request, Response } from 'express';
import IUserService from '../services/interfaces/IUserService';
import Status from './enums/status';

class UserController extends BaseController {
  private userService: IUserService = new UserService();

  constructor() {
    super();
  }

  public async getUsers(req: Request, res: Response, next: NextFunction) {
    try {
      const users = await this.userService.getUsersAll();

      if (users.length === 0) {
        throw {
          status: Status.NotFound,
          message: 'Users is not found!'
        };
      }

      return res.status(Status.Ok).json({ data: users, message: 'Success!' });
    } catch (err) {
      next(err);
    }

  }

  public async getUser(req: Request, res: Response, next: NextFunction) {
    try {
      const id = Number(req.params.id);

      if (!id) {
        throw {
          status: Status.BadRequest,
          message: 'Id incorrect!'
        };
      }

      const user = await this.userService.getUserById(id);

      if (!user) {
        throw {
          status: Status.NotFound,
          message: 'User is not found!'
        };
      }

      return res.status(Status.Ok).json({ data: user, message: 'Success!' });
    } catch (err) {
      next(err);
    }
  }

  public async addUser(req: Request, res: Response, next: NextFunction) {
    try {
      const user = await this.userService.addUser({
        login: req.body.login,
        password: req.body.password
      });

      if (!user) {
        throw {
          status: Status.BadRequest,
          message: 'User not added!'
        };
      }

      res.status(Status.Ok).json({ data: user, message: 'Success!' });
    } catch (err) {
      next(err);
    }
  }

  public async deleteUser(req: Request, res: Response, next: NextFunction) {
    try {
      const id = Number(req.params.id);

      if (!id) {
        throw {
          status: Status.BadRequest,
          message: 'Id incorrect!'
        };
      }

      const isDeleted = this.userService.deleteUserById(id);

      if (!isDeleted) {
        throw {
          status: Status.BadRequest,
          message: 'User not deleted!'
        };
      }

      res.status(Status.Ok).json({ message: 'Success!' });
    } catch (err) {
      next(err);
    }
  }
}

export default UserController;
