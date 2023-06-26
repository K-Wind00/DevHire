import { JwtService } from '@nestjs/jwt';
import { UserService } from 'src/user/user.service';
import { User } from 'src/user/user.entity';
import { RegisterUserDto } from 'src/User/dto/user-register';
export declare class AuthService {
    private userService;
    private jwtService;
    constructor(userService: UserService, jwtService: JwtService);
    validateUser(username: string, pass: string): Promise<any>;
    login(user: User): Promise<any>;
    register(userData: RegisterUserDto): Promise<any>;
}
