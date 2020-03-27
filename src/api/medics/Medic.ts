export interface IMedic {
    name: string
    email: string
    username: string
    createdAt: Date
}

export class Medic implements IMedic {
    name: string
    email: string
    username: string
    createdAt: Date

    constructor(name: string, email: string, username: string, createdAt: Date) {
        this.name = name
        this.email = email
        this.username = username
        this.createdAt = createdAt
    }
}
