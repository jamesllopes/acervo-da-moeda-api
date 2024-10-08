// src/user/user.module.ts

import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';

import { UserService } from './user.service';
import User from './entities/user.entity';
import { InvitedEmail } from './entities/userInvite.entity';

@Module({
  imports: [SequelizeModule.forFeature([InvitedEmail, User])],
  providers: [UserService],
  exports: [UserService], // Certifique-se de exportar o UserService
})
export class UserModule {}
