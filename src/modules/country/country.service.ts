import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import Country from './entities/country.entity';
import {
  AllCountriesInterface,
  CountriesInterface,
} from './interfaces/country';

@Injectable()
export class CountryService {
  constructor(
    @InjectModel(Country)
    private readonly countryModel: typeof Country,
  ) {}

  async findAll(
    page: number = 1,
    perPage: number = 10,
  ): Promise<AllCountriesInterface> {
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

  async findOne(id: string): Promise<CountriesInterface | null> {
    const country = await this.countryModel.findOne({
      where: { id },
      attributes: ['id', 'name', 'symbol', 'locale'],
    });

    if (!country) {
      return null;
    }

    const {
      id: countryId,
      name,
      symbol,
      locale,
    } = country.get({ plain: true });

    return {
      id: countryId,
      name,
      symbol,
      locale,
      flag: `${process.env.URL_FLAGS}${symbol.toLowerCase()}.svg`,
    };
  }
}
