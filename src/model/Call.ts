import { Entity, Column, PrimaryGeneratedColumn, OneToOne, ManyToOne, JoinColumn, JoinTable } from 'typeorm'
import { Medic } from "./Medic"
//import { Surgery } from "./Surgery"  see @ManyToOne comments
import { ClinicalCase } from "./ClinicalCase"

export interface ICall {
    id: number,
    caller: Medic,
    callee: Medic,
    beginCallDate: Date,
    clinicalCase: ClinicalCase

}



@Entity()
export class Call implements ICall {

    @PrimaryGeneratedColumn()
    id: number

    @OneToOne(() => Medic) // foreign key relationship with medic the caller requesting assistance
    @JoinColumn()
    caller: Medic 

    @OneToOne(() => Medic) // foreign key relationship with medic the callee providing assistance
    @JoinColumn()
    callee: Medic

    @Column({type: "datetime"})
    beginCallDate: Date

    @Column({
        type: "datetime",
        nullable: true
    })
    pickUpDate: Date

    @Column({type: "datetime"})
    hangUpDate: Date

    @ManyToOne(() => ClinicalCase, clinicalCase => clinicalCase.calls ) // foreign key relationship with medic the callee providing assistance
    @JoinTable()
    clinicalCase: ClinicalCase

    constructor(callerID: Medic, calleeID: Medic, beginCallDate: Date, clinicalCase: ClinicalCase) {
        this.caller = callerID
        this.callee = calleeID
        this.beginCallDate = beginCallDate
        this.clinicalCase = clinicalCase
    }
}
