"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CountryService = void 0;
const common_1 = require("@nestjs/common");
const sequelize_1 = require("@nestjs/sequelize");
const country_entity_1 = require("./entities/country.entity");
let CountryService = class CountryService {
    constructor(countryModel) {
        this.countryModel = countryModel;
    }
    async findAll(page = 1, perPage = 10) {
        const offset = (page - 1) * perPage;
        const { count, rows } = await this.countryModel.findAndCountAll({
            attributes: ['id', 'name', 'symbol', 'locale'],
            limit: perPage,
            offset: offset,
        });
        const data = rows.map((country) => ({
            ...country.toJSON(),
            flag: `${process.env.URL_FLAGS}${country.symbol.toLowerCase()}.svg`,
            id: country.id,
        }));
        return {
            page,
            perPage,
            total: count,
            data,
        };
    }
    async findOne(id) {
        const country = await this.countryModel.findOne({
            where: { id },
            attributes: ['id', 'name', 'symbol', 'locale'],
        });
        if (!country) {
            return null;
        }
        const { id: countryId, name, symbol, locale, } = country.get({ plain: true });
        return {
            id: countryId,
            name,
            symbol,
            locale,
            flag: `${process.env.URL_FLAGS}${symbol.toLowerCase()}.svg`,
        };
    }
};
exports.CountryService = CountryService;
exports.CountryService = CountryService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, sequelize_1.InjectModel)(country_entity_1.default)),
    __metadata("design:paramtypes", [Object])
], CountryService);
//# sourceMappingURL=country.service.js.map