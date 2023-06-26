import { Injectable, UnauthorizedException } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { AuthService } from "./auth.service";
import { Strategy } from "passport-local";


@Injectable()
export class LocalStartegy extends PassportStrategy(Strategy) {
    constructor(private authService: AuthService) {
        super()
    }

    async validate(username: string, pass: string):Promise<any> {
        const user = await this.authService.validateUser(username, pass)

        if(!user){
            throw new UnauthorizedException()
        }
        return user
    }
}