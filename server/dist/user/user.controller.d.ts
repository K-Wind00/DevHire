import { UserService } from './user.service';
import { RegisterUserDto } from './dto/register-user';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    register(registerUserDto: RegisterUserDto): Promise<void>;
    getAllUsers(): Promise<import("./user.entity").User[]>;
}
