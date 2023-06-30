import { Injectable, UnauthorizedException } from '@nestjs/common'
import { UserService } from 'src/user/user.service'
import { JwtService } from '@nestjs/jwt'
import * as bcrypt from 'bcrypt'
import { SignInDto } from 'src/lib/dto/sign-in.dto'
import { SignUpDto } from 'src/lib/dto/sign-up.dto'
import { User } from 'src/user/user.entity'

@Injectable()
export class AuthService {
	constructor(
		private readonly userService: UserService,
		private readonly jwtService: JwtService
	) {}

	async validateUser(username: string, pass: string): Promise<any> {
		const user = await this.userService.findOne(username)

		if (user && bcrypt.compare(pass, user.password)) {
            const { password, ...results } = user
            return results
		}
        return null
	}

    async signIn(user: any): Promise<any> {
        const payload = { sub: user.id, username: user.username }

        return {
            access_token: await this.jwtService.signAsync(payload),
        }
    }

    async signUp(signUpDto: SignUpDto): Promise<User | any> {
        return await this.userService.create(signUpDto)
    }
}
