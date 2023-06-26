import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from 'src/user/user.service';
import * as bcrypt from 'bcrypt';
import { User } from 'src/user/user.entity';
import { RegisterUserDto } from 'src/User/dto/user-register';

@Injectable()
export class AuthService {
    constructor(private userService: UserService, private jwtService: JwtService) {}

    async validateUser(username: string, pass: string): Promise<any> {
        const user = await this.userService.findOne(username)

        if (user && await bcrypt.compare(pass, user.password)) {
            const { password, ...results } = user
            return results
        }
        return null
    }

    async login(user: User): Promise<any> {
        const payload = { username: user.username, sub: user.id }

        return {
            access_token: this.jwtService.signAsync(payload)
        }
    }

    async register(userData: RegisterUserDto) {
        const user = await this.userService.create(userData)
        return user
    }
}
