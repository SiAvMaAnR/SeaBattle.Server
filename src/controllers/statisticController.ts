import BaseController from './baseController';
import { NextFunction, Request, Response } from 'express';
import IStatisticService from '../services/interfaces/IStatisticService';
import StatisticService from '../services/statisticService';
import { IStatisticRes } from '../business/game/data/statistic';
import Status from './enums/status';

class StatisticController extends BaseController {
  private statisticService: IStatisticService = new StatisticService();

  public async getGames(req: Request, res: Response, next: NextFunction) {
    try {
      const userId: number = req['user']?.data?.id;

      if (!userId) {
        throw {
          status: Status.NotFound,
          message: 'User not found!'
        };
      }

      const findField = req.query.find?.toString();
      const page = req.query.page && parseInt(req.query.page.toString());
      const size = req.query.size && parseInt(req.query.size.toString());
      const sort =
        req.query.sort === 'asc' || req.query.sort === 'desc'
          ? req.query.sort
          : null;

      return res.status(Status.Ok).json({
        data: await this.statisticService.getGames(
          userId,
          {
            page,
            size
          },
          findField,
          sort
        ),
        message: 'Success!'
      });
    } catch (err) {
      next(err);
    }
  }

  public async getGameById(req: Request, res: Response, next: NextFunction) {
    try {
      const userId: number = req['user']?.data?.id;

      if (!userId) {
        throw {
          status: Status.NotFound,
          message: 'User not found!'
        };
      }

      const gameId = Number(req.params.id);

      if (!gameId) {
        throw {
          status: Status.NotFound,
          message: 'Game not found!'
        };
      }

      const game = await this.statisticService.getGameById(userId, gameId);

      return res.status(Status.Ok).json({
        data: game,
        message: 'Success!'
      });
    } catch (err) {
      next(err);
    }
  }

  public async getCommonStat(req: Request, res: Response, next: NextFunction) {
    try {
      const userId: number = req['user']?.data?.id;

      if (!userId) {
        throw {
          status: Status.NotFound,
          message: 'User not found!'
        };
      }

      const findField = req.query.find?.toString();

      return res.status(Status.Ok).json({
        data: await this.statisticService.getCommonStat(userId, findField),
        message: 'Success!'
      });
    } catch (err) {
      next(err);
    }
  }

  public async addGame(req: Request, res: Response, next: NextFunction) {
    try {
      const userId: number = req['user']?.data?.id;

      if (!userId) {
        throw {
          status: Status.NotFound,
          message: 'User not found!'
        };
      }

      const _game: IStatisticRes = {
        countMyMoves: req.body.countMyMoves ?? -1,
        countHits: req.body.countHits ?? -1,
        countMisses: req.body.countMisses ?? -1,
        isWin: req.body.isWin ?? -1,
        enemy: req.body.enemy ?? -1
      };

      const game = await this.statisticService.addGame(userId, _game);

      return res.status(Status.Ok).json({
        data: game,
        message: 'Success!'
      });
    } catch (err) {
      next(err);
    }
  }
}

export default StatisticController;
