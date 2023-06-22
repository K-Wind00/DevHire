import { Offer } from "src/Offer/offer.entity";
import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinTable } from "typeorm"

enum UserRole {
    ADMIN = 'admin',
    USER = 'user',
    COMPANY = 'company'
}

@Entity()
export class User {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    username: string

    @Column()
    password: string

    @Column()
    email: string

    @Column({
        type: 'enum',
        enum: UserRole,
        default: UserRole.USER
    })
    role: UserRole

    @Column()
    skills: string

    @ManyToMany(() => Offer, offer => offer.users)
    @JoinTable()
    offers: Offer

    
}