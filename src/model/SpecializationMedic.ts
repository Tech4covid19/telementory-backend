import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm'

export enum SpecialtyEnum {
    GENERAL="General surgery",
    PEDIATRIC= "Pediatric surgery"
}


export interface ISpecializationMedic {
    name: string
}

@Entity()
export class SpecializationMedic implements ISpecializationMedic {

	@PrimaryGeneratedColumn()
    id: number

    @Column({
        type: "enum",
        enum: SpecialtyEnum,
        default: SpecialtyEnum.GENERAL
    })
    name: string // this field probably shouldn't be an enum, but a relationship with a specialty name if we'll keep that info in a database 

    /*constructor(name: string) {
        this.name = name
    }*/
}