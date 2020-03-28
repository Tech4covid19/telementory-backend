import { Entity, PrimaryGeneratedColumn, OneToOne, JoinColumn } from 'typeorm'
import { User } from "./User"
import { SpecializationMedic } from "./SpecializationMedic"

export interface IMedic {
    user: User,
    specialty: SpecializationMedic
}

/* maybe name,email, username, createdAt 
    should be ommited since they're also in User
    medic should have a specialty id 
*/

/*
    Table-per-Type inheritance
    why?: https://blog.devart.com/table-per-type-vs-table-per-hierarchy-inheritance.html

    +----------+        user is created and entry in table medic is created, when user is fetched we return user data and medic data (with its specialty)
    |   user   |           
    +----------+                    AND
    /   ISA     \               
 +-------+   +-------+         +------+                   +-----------------+
 |       |   |       |         |medic |      --has a-->   | Specialtization |   which for now is connected only to SpecializationMedic
 | medic |   | nurse |         +------+                   +-----------------+
 +-------+   +-------+
  Default
  value

*/

@Entity()
export class Medic implements IMedic {

    @PrimaryGeneratedColumn()
    id: number

    @OneToOne(() => User) // foreign key relationship with user
    @JoinColumn()
    user: User

    @OneToOne(() => SpecializationMedic) //foreign key realtionship with medic
    @JoinColumn()
    specialty: SpecializationMedic

    /*constructor(specialty: SpecializationMedic, user: User) {
        this.specialty = SpecializationMedic
        this.user = User
    }*/
}
