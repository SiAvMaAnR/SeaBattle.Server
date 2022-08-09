import sequelize from "../sequelize/sequelize";
import BaseController from "./baseController";
import StatisticRepository from "../repositories/gameStatRepository";
import { Request, Response } from "express";

class StatisticController extends BaseController {
    private statisticRepository: StatisticRepository = new StatisticRepository(sequelize);

    constructor() {
        super();
    }

    public getStatistics = async (req: Request, res: Response) => {

        const statistics = await this.statisticRepository.getAll();


        return res.status(200).send({ data: "getStatistics", statistics: statistics });
    };

}

export default StatisticController;