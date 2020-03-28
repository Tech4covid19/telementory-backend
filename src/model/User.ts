import { Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn } from 'typeorm'
import { HealthOrg } from "./HealthOrg"

/*export enum StaffType {
    MEDIC="medic",
    NURSE="nurse"
}*/

export enum LanguageEnum {
    PT="pt-pt",
    EN="en"
}


@Entity()
export class User {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string

    @Column()
    email: string

    @Column({
        nullable: true
    })
    username: string

    @Column({type: "datetime"})
    createdAt: Date

    @Column()
    phoneNumber: string

    @Column({
        nullable: true
    })
    country: number // Perhaps an id and a relation to an external table country would be better

    @Column({
        type: "enum",
        enum: LanguageEnum,
        default: LanguageEnum.EN
    })
    language: LanguageEnum // Perhaps an id and a relation to an external table language would be better

    @Column({
        nullable: true
    })
    status: number // will we be needing this?

    /*@Column(          // this was commented because when we create an entry in user we also create an entry in medic, please check medic model
        {
        type: "enum",
        enum: StaffType,
        default StaffType.MEDIC
    })
    userType: StaffType*/

    @OneToOne(() => HealthOrg) //foreign key realtionship with HealthOrg, for now a user belongs to one HealthOrg
    @JoinColumn()
    healthOrg: HealthOrg
}
