import { Model } from "sequelize-typescript";
export default class User extends Model<User> {
    username: string;
    email: string;
    password: string;
    createdAt: Date;
    updatedAt: Date;
}
