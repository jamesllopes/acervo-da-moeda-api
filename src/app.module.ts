import { Module } from '@nestjs/common';
import { DatabaseModule } from './database/database.module';
import { UserModule } from './modules/user/user.module';
import { AuthModule } from './modules/auth/auth.module';
import { CountryModule } from './modules/country/country.module';

@Module({
  imports: [DatabaseModule, UserModule, AuthModule, CountryModule],
})
export class AppModule {}
