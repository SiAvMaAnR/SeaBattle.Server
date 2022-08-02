import { Sequelize } from "sequelize"
import configDB from "../config/db.config"

const sequelize = new Sequelize(
    configDB.db,
    configDB.user,
    configDB.password,
    {
        dialect: configDB.dialect,
        pool: {
            max: configDB.pool.max, //максимальное кол-во соединений в пуле (Default: 5)
            min: configDB.pool.min, //минимальное кол-во соединений в пуле (Default: 0)
            acquire: configDB.pool.acquire, //время в миллисекундах, в течение которого будет осуществляться попытка установить соединение, прежде чем будет сгенерировано исключение (Default: 60000)
            idle: configDB.pool.idle, //время простоя в миллисекундах, по истечении которого соединение покинет пул (Default: 1000)
        },
    }
);




export default sequelize;
