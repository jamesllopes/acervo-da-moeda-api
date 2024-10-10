import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';

import { UserService } from './user.service';
import User from './entities/user.entity';
import { InvitedEmail } from './entities/userInvite.entity';
import { UserController } from './user.controller';

@Module({
  imports: [SequelizeModule.forFeature([InvitedEmail, User])],
  providers: [UserService],
  exports: [UserService],
  controllers: [UserController],
})
export class UserModule {}
