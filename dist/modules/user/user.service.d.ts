import { CreateUserDto } from './dto/user.dto';
import User from './entities/user.entity';
export declare class UserService {
    private readonly userModel;
    constructor(userModel: typeof User);
    createUser(createUserDto: CreateUserDto): Promise<User>;
    findAll(): Promise<User[]>;
    findByUsername(username: string): Promise<User | null>;
    findByEmail(email: string): Promise<User | null>;
}
