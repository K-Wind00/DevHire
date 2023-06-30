import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

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
    
}