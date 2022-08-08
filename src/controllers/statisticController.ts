import sequelize from "../sequelize/sequelize";
import UserRepository from "../repositories/userRepository";
import BaseController from "./baseController";
import StatisticRepository from "../repositories/statisticRepository";

class StatisticController extends BaseController {
    private statisticRepository: StatisticRepository = new StatisticRepository(sequelize);

    constructor() {
        super();
    }

    public getStatistics = async (req, res) => {

        const statistics = await this.statisticRepository.getAll();


        return res.status(200).send({ data: "getStatistics", statistics: statistics });
    };

}

export default StatisticController;