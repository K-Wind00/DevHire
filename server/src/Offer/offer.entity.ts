import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

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

    @Column()
    localization: string

    @Column()
    country: string

    @Column()
    contract: string

    @Column()
    seniority: string

    @Column()
    description: string

    @Column({ default: true })
    isActive: boolean

    @Column({ nullable: true, default: 'defaultCompany.jpg'})
    companyPhoto: string

}