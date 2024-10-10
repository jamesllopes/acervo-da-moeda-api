import { JwtService } from '@nestjs/jwt';
import { UserService } from '../user/user.service';
import { RegisterDto } from './dto/register.dto';
import User from '../user/entities/user.entity';
import { LoginResponseInterface } from './interfaces/auth';
export declare class AuthService {
    private readonly userService;
    private readonly jwtService;
    constructor(userService: UserService, jwtService: JwtService);
    validateUser(email: string, pass: string): Promise<any>;
    login(user: User): Promise<LoginResponseInterface>;
    register(registerDto: RegisterDto): Promise<User>;
}
