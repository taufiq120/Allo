import { Repository } from 'typeorm';
import { User } from './user.entity';
export declare class UserService {
    private userRepository;
    constructor(userRepository: Repository<User>);
    findOne(username: string): Promise<User | null>;
    createUser(username: string, password: string, role: string): Promise<User>;
    getAllUsers(): Promise<User[]>;
}
