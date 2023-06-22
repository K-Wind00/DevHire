import { Offer } from "src/Offer/offer.entity";
declare enum UserRole {
    ADMIN = "admin",
    USER = "user",
    COMPANY = "company"
}
export declare class User {
    id: number;
    username: string;
    password: string;
    email: string;
    role: UserRole;
    skills: string;
    offers: Offer;
}
export {};
