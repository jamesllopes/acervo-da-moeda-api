// src/user/dto/create-user.dto.ts

import { IsNotEmpty, IsString, IsEmail } from 'class-validator';

export class CreateUserDto {
    @IsNotEmpty()
    @IsString()
    username: string;

    @IsNotEmpty()
    @IsString()
    password: string;

    @IsNotEmpty()
    @IsEmail()
    email: string;
}