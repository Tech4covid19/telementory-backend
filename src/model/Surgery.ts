import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm'
import { ClinicalCase} from './ClinicalCase'

export interface ISurgery {
    type: string,
    createdAt: Date,
    scheduledAt: Date,
    clinicalCase: ClinicalCase
}

@Entity()
export class Surgery implements ISurgery {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    type: string // this might need to be a description not using an enum, although types should be normalized

    @Column({type: "datetime"})
    createdAt: Date

    @Column({type: "datetime"})
    scheduledAt: Date // changed name from runningAt to scheduledAt

    @Column({
        type: "time",
        nullable: true
        }) // should this even exist? will a mentoree register the end of a surgery?
    duration: string

    @ManyToOne(() => ClinicalCase, clinicalCase => clinicalCase.surgeries) 
    clinicalCase: ClinicalCase

    /*constructor(type: string, createdAt: Date, scheduledAt: Date, clinicalCase: ClinicalCase) {
        this.type = type
        this.createdAt = createdAt
        this.scheduledAt = scheduledAt
        this.clinicalCase = clinicalCase
    }*/
}
