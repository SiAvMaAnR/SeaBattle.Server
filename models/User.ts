import { DataType, Model, Table, Column, AutoIncrement, PrimaryKey } from "sequelize-typescript";


@Table
class User extends Model<User> {
    @AutoIncrement
    @PrimaryKey
    @Column(DataType.NUMBER)
    id: number


    @Column(DataType.STRING)
    name: string

    @Column(DataType.NUMBER)
    age: number
}

export default User;