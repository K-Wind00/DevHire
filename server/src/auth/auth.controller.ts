import { Body, Controller, Get, HttpCode, Post, UseGuards, Request } from '@nestjs/common';
import { AuthService } from './auth.service';
import { SignInDto } from 'src/lib/dto/sign-in.dto';
import { LocalAuthGuard } from './local-auth.guard';
import { JwtAuthGuard } from './jwt-auth.guard';
import { SignUpDto } from 'src/lib/dto/sign-up.dto';

@Controller()
export class AuthController {
    constructor(private readonly authService: AuthService ) {}

    @UseGuards(LocalAuthGuard)
    @HttpCode(200)
    @Post('auth/login')
    signIn(@Body() signInDto: SignInDto) {
        return this.authService.signIn(signInDto)
    }

    @UseGuards(LocalAuthGuard)
    @HttpCode(201)
    @Post('/auth/register')
    async signUp(@Body()  signUpDto: SignUpDto) {
        return await this.authService.signUp(signUpDto)
    }

    @UseGuards(JwtAuthGuard)
    @Get('profile')
    getProfile(@Request() req) {
        return req.user
    }
}
