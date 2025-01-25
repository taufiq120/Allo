import { UserService } from './user.service';
import { User } from './user.entity';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    getAllUsers(): Promise<User[]>;
    createUser(createUserDto: {
        username: string;
        password: string;
        role: string;
    }): Promise<User>;
}
