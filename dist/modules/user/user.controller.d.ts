import { UserService } from './user.service';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    findAll(): Promise<import("./entities/user.entity").default[]>;
    inviteUser(body: {
        email: string;
    }): any;
}
