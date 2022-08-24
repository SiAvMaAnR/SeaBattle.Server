import sequelize from "../database/sequelize";
import BaseController from "./baseController";
import StatisticRepository from "../repositories/gameStatRepository";
import { Request, Response } from "express";
import IStatisticService from "../services/interfaces/IStatisticService";
import StatisticService from "../services/statisticService";

class StatisticController extends BaseController {
    private statisticService : IStatisticService = new StatisticService();

    constructor() {
        super();
    }

    public async getStatistics(req: Request, res: Response) {

        
    };

}

export default StatisticController;