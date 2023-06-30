import { Body, Controller, Get, HttpCode, Param, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { RegisterUserDto } from './dto/register-user';

@Controller()
export class UserController {
    constructor(private readonly userService: UserService) {}

    @HttpCode(200)
    @Post('/register')
    async register(@Body() registerUserDto: RegisterUserDto) {
        await this.userService.create(registerUserDto)
    }

    // @Get('/get/:username')
    // async getUserByUsername(@Param('username') username: string) {
    //     return await this.userService.findUserByUsername(username)
    // }

    @Get('/users')
    async getAllUsers(){
       return await this.userService.getAll()
    }
}
