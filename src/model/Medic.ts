import { Entity, Column } from 'typeorm'

export interface IMedic {
    name: string
    email: string
    username: string
    createdAt: Date
}

@Entity()
export class Medic implements IMedic {
    @Column()
    name: string

    @Column()
    email: string

    @Column()
    username: string

    @Column()
    createdAt: Date

    constructor(name: string, email: string, username: string, createdAt: Date) {
        this.name = name
        this.email = email
        this.username = username
        this.createdAt = createdAt
    }
}
