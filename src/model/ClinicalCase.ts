import { Entity, Column, PrimaryGeneratedColumn, OneToMany,JoinTable, JoinColumn, OneToOne } from 'typeorm'
import { Surgery } from "./Surgery" 
import { Call } from "./Call"
import { HealthOrg } from "./HealthOrg"

export enum CaseStatus {
    OPEN="open",
    CLOSED="closed"
}

export interface IClinicalCase {
    description: string,
    healthOrg: HealthOrg,
    createdAt: Date,
    status: CaseStatus,
    surgeries: Surgery[],
    calls: Call[]
}


/* current proposal

            +--------------------+                        +------------------+                                  +----------------+
            |       Surgery      |  <---------N:1------>  |   clinicalCase   |   <-------------1:N---------->   |      Call      |
            +--------------------+                        +------------------+                                  +----------------+


*/

@Entity()
export class ClinicalCase implements IClinicalCase {

    @PrimaryGeneratedColumn()
    id: number

    @Column({
        type: "varchar",
        length: 150
    })
    description: string

    @OneToOne(() => HealthOrg) //foreign key realtionship with HealthOrg, for now a user belongs to one HealthOrg
    @JoinColumn()
    healthOrg: HealthOrg

    @Column({type: "datetime"})
    createdAt: Date

    @Column({
        type: "enum",
        enum: CaseStatus,
        default: CaseStatus.OPEN
    })
    status: CaseStatus

    @Column({
        nullable: true
    })
    closedAt: Date

    @OneToMany(() => Surgery, surgery => surgery.clinicalCase)
    @JoinTable()
    surgeries: Surgery[]

    @OneToMany(() => Call, call => call.clinicalCase)
    @JoinTable()
    calls: Call[]

    /*constructor(description: string, healthOrg: HealthOrg, createdAt: Date, closedAt: Date) {
        this.description = description
        this.healthOrg = healthOrg
        this.createdAt = createdAt
        this.closedAt = closedAt
    }*/
}
