import { AuthService } from "./auth.service";
import { Strategy } from "passport-local";
declare const LocalStartegy_base: new (...args: any[]) => Strategy;
export declare class LocalStartegy extends LocalStartegy_base {
    private authService;
    constructor(authService: AuthService);
    validate(username: string, pass: string): Promise<any>;
}
export {};
