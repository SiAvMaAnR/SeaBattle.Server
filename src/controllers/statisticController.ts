import BaseController from "./baseController";
import { Request, Response } from "express";
import IStatisticService from "../services/interfaces/IStatisticService";
import StatisticService from "../services/statisticService";
import { IJwtUser } from "../services/baseService";
import { IStatisticRes } from "../business/game/data/statistic";


class StatisticController extends BaseController {
    private statisticService: IStatisticService = new StatisticService();

    public async getGames(req: Request, res: Response) {
        try {

            const userId: number = req['user']?.data?.id;

            if (!userId) {
                throw {
                    status: 401,
                    message: "User not found!"
                }
            }

            const findField = req.query.find?.toString();
            const page = req.query.page && parseInt(req.query.page.toString());
            const size = req.query.size && parseInt(req.query.size.toString());

            return res.status(200).json({
                data: await this.statisticService.getGames(userId, findField, page, size),
                message: "Success!"
            });
        }
        catch (err) {
            return res.status(err.status || 400).json({
                message: err.message
            });
        }

    };

    public async getGameById(req: Request, res: Response) {
        try {
            const userId: number = req['user']?.data?.id;

            if (!userId) {
                throw {
                    status: 401,
                    message: "User not found!"
                }
            }

            const gameId = Number(req.params.id);

            if (!gameId) {
                throw {
                    status: 400,
                    message: "Game not found!"
                }
            }

            const game = await this.statisticService.getGameById(userId, gameId);

            return res.status(200).json({
                data: game,
                message: "Success!"
            });

        }
        catch (err) {
            return res.status(err.status || 400).json({
                message: err.message
            });
        }
    }



    public async getCommonStat(req: Request, res: Response) {
        try {

            const userId: number = req['user']?.data?.id;

            if (!userId) {
                throw {
                    status: 401,
                    message: "User not found!"
                }
            }

            const findField = req.query.find?.toString();


            return res.status(200).json({
                data: await this.statisticService.getCommonStat(userId, findField),
                message: "Success!"
            });

        }
        catch (err) {
            return res.status(err.status || 400).json({
                message: err.message
            });
        }

    }


    public async addGame(req: Request, res: Response) {
        try {
            const userId: number = req['user']?.data?.id;

            if (!userId) {
                throw {
                    status: 401,
                    message: "User not found!"
                }
            }

            const _game: IStatisticRes = {
                countMyMoves: req.body.countMyMoves ?? -1,
                countHits: req.body.countHits ?? -1,
                countMisses: req.body.countMisses ?? -1,
                isWin: req.body.isWin ?? -1,
                enemy: req.body.enemy ?? -1
            }

            const game = await this.statisticService.addGame(userId, _game);

            return res.status(200).json({
                data: game,
                message: "Success!"
            });

        }
        catch (err) {
            return res.status(err.status || 400).json({
                message: err.message
            });
        }
    }
}


export default StatisticController;