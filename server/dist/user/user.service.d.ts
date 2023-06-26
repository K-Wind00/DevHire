import { User } from './user.entity';
import { Repository } from 'typeorm';
import { RegisterUserDto } from './dto/user-register';
export declare class UserService {
    private userRepository;
    constructor(userRepository: Repository<User>);
    findOne(username: string): Promise<User | undefined>;
    create(userData: RegisterUserDto): Promise<User | any>;
}
