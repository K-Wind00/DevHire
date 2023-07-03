import { AuthService } from './auth.service';
import { SignInDto } from 'src/lib/dto/sign-in.dto';
import { SignUpDto } from 'src/lib/dto/sign-up.dto';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    signIn(signInDto: SignInDto): Promise<any>;
    signUp(signUpDto: SignUpDto): Promise<any>;
    getProfile(req: any): any;
}
