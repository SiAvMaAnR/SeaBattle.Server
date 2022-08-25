import BaseController from "./baseController";
import { Request, Response } from "express";
import IStatisticService from "../services/interfaces/IStatisticService";
import StatisticService from "../services/statisticService";
import { IJwtUser } from "../services/baseService";


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


            return res.status(200).json({
                data: await this.statisticService.getGames(userId),
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

            return res.status(200).json({
                data: await this.statisticService.getCommonStat(userId),
                message: "Success!"
            });

        }
        catch (err) {
            return res.status(err.status || 400).json({
                message: err.message
            });
        }

    };
}


export default StatisticController;