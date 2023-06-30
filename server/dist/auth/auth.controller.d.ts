import { AuthService } from './auth.service';
import { SignInDto } from 'src/lib/dto/sign-in.dto';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    signIn(signInDto: SignInDto): Promise<any>;
    signUp(req: any): Promise<any>;
    getProfile(req: any): any;
}
