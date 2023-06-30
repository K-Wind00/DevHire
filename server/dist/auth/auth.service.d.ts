import { UserService } from 'src/user/user.service';
import { JwtService } from '@nestjs/jwt';
import { SignUpDto } from 'src/lib/dto/sign-up.dto';
import { User } from 'src/user/user.entity';
export declare class AuthService {
    private readonly userService;
    private readonly jwtService;
    constructor(userService: UserService, jwtService: JwtService);
    validateUser(username: string, pass: string): Promise<any>;
    signIn(user: any): Promise<any>;
    signUp(signUpDto: SignUpDto): Promise<User | any>;
}
