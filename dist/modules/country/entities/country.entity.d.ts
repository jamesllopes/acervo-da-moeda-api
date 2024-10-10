import { Model } from 'sequelize-typescript';
export default class Country extends Model<Country> {
    name: string;
    symbol: string;
    locale: string;
    createdAt: Date;
    updatedAt: Date;
}
