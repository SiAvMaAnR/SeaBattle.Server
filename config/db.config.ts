const configDB = {
    host: "localhost",
    user: "postgres",
    password: "Sosnova61S",
    db: "postgres",
    dialect: "postgres" as "postgres",
    pool: {
        max: 10,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
}

export default configDB;