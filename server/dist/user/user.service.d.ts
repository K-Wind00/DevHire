import { User } from './user.entity';
import { Repository } from 'typeorm';
import { SignUpDto } from 'src/lib/dto/sign-up.dto';
export declare class UserService {
    private userRepository;
    constructor(userRepository: Repository<User>);
    create(signUpDto: SignUpDto): Promise<User>;
    findOne(username: string): Promise<User | any>;
    getAll(): Promise<User[]>;
}
