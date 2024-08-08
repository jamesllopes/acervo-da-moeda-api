// src/user/user.service.ts

import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateUserDto } from './dto/user.dto';
import User from './entities/user.entity';

@Injectable()
export class UserService {
    constructor(
        @InjectModel(User)
        private readonly userModel: typeof User,
    ) { }

    async createUser(createUserDto: CreateUserDto): Promise<User> {
        const user = new User();
        user.username = createUserDto.username;
        user.password = createUserDto.password;
        user.email = createUserDto.email;

        return user.save();
    }

    async findAll(): Promise<User[]> {
        return this.userModel.findAll();
    }

    async findByUsername(username: string): Promise<User | null> {
        return this.userModel.findOne({ where: { username } });
    }

    async findByEmail(email: string): Promise<User | null> {
        return this.userModel.findOne({ where: { email } });
    }
}