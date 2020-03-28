import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm'

export interface IHealthOrg {
    name: string
    address: string
    country: string
}


@Entity()
export class HealthOrg implements IHealthOrg {

	@PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string 

    @Column()
    address: string

    @Column()
    country: string

    /*constructor(name: string, address: string, country: string) {
        this.name = name
        this.address = address
        this.country = country
    }*/
}