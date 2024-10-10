// src/user/user.controller.ts

import { Controller, Get, Param, Query } from '@nestjs/common';
import { CountryService } from './country.service';

@Controller('countries')
export class CountryController {
  constructor(private readonly countryService: CountryService) {}

  @Get()
  async getAllCountries(
    @Query('page') page: string = '1',
    @Query('perPage') perPage: string = '10',
  ) {
    return this.countryService.findAll(Number(page), Number(perPage));
  }
  @Get(':id')
  async getOneCountrie(@Param('id') id: string) {
    return this.countryService.findOne(id);
  }
}
