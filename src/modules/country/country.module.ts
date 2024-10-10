import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';

import { CountryService } from './country.service';
import Country from './entities/country.entity';
import { CountryController } from './country.controller';

@Module({
  imports: [SequelizeModule.forFeature([Country])],
  providers: [CountryService],
  exports: [CountryService],
  controllers: [CountryController],
})
export class CountryModule {}
