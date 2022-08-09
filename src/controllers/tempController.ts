import sequelize from "../sequelize/sequelize";
import BaseController from "./baseController";
import StatisticRepository from "../repositories/gameStatRepository";
import MySeaBattleService from "../services/gameService";
import Cell from "../enums/cell";
import { Request, Response } from "express";

class TempController extends BaseController {
    private statisticRepository: StatisticRepository = new StatisticRepository(sequelize);

    constructor() {
        super();
    }

    public test1 = async (req: Request, res: Response) => {
        const service = new MySeaBattleService();

        const battleground = service.getMyField();




        return res.status(200).send({
            battleground: battleground,
        });
    };

}

export default TempController;