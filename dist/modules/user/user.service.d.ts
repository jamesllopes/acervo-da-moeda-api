import { CreateUserDto } from './dto/user.dto';
import User from './entities/user.entity';
import { InvitedEmail } from './entities/userInvite.entity';
export declare class UserService {
    private readonly userModel;
    private readonly userInvitedModel;
    constructor(userModel: typeof User, userInvitedModel: typeof InvitedEmail);
    isEmailInvited(email: string): Promise<boolean>;
    createUser(createUserDto: CreateUserDto): Promise<User>;
    findAll(): Promise<User[]>;
    findByEmail(email: string): Promise<User | null>;
    inviteUser(email: string): Promise<any>;
}
