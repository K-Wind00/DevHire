import { User } from "src/User/user.entity";
export declare class Offer {
    id: number;
    offerTitle: string;
    companyName: string;
    categories: string;
    salary: string;
    isActive: boolean;
    companyPhoto: string;
    users: User;
}
