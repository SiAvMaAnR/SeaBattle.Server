import sequelize from "../sequelize/sequelize";
import BaseController from "./baseController";
import StatisticRepository from "../repositories/gameStatRepository";
import MySeaBattleService from "../services/seaBattleService";
import Cell from "../enums/cell";

class TempController extends BaseController {
    private statisticRepository: StatisticRepository = new StatisticRepository(sequelize);

    constructor() {
        super();
    }

    public test1 = async (req, res) => {
        const service = new MySeaBattleService();

        const battleground = service.getBattleground();

        


        return res.status(200).send({
            battleground: battleground,
        });
    };

}

export default TempController;