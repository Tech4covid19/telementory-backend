import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm'

@Entity()
export class User {

    @PrimaryGeneratedColumn()
    id!: number

    @Column()
    name!: string

    @Column()
    email!: string

    @Column()
    username!: string

    @Column()
    createdAt!: Date

    @Column()
    phoneNumber!: string

    @Column()
    country!: number // Perhaps an id 🤔

    @Column()
    language!: number // 👆

    @Column()
    status!: number

    @Column()
    userType!: number

    @Column()
    idHealthOrg!: number
}
