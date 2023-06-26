import { User } from "src/User/user.entity"
import { Entity, PrimaryGeneratedColumn, Column , ManyToMany} from "typeorm"

@Entity()
export class Offer {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    offerTitle: string

    @Column()
    companyName: string

    @Column()
    categories: string

    @Column()
    salary: string

    @Column({ default: true })
    isActive: boolean

    @Column()
    companyPhoto: string

    @ManyToMany(() => User, user => user.offer)
    user: User
    
}