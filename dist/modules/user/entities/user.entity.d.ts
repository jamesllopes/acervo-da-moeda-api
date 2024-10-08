import { Model } from 'sequelize-typescript';
export default class User extends Model<User> {
    name: string;
    email: string;
    password: string;
    createdAt: Date;
    updatedAt: Date;
}
