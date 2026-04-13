import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity("guest")
export class Guest{

    @PrimaryGeneratedColumn()
    id: number

    @Column({length:100})
    name: string

    @Column({unique:true, length:100})
    email:string

    @Column({unique:true, length:11})
    cpf:string

    @Column()
    phone:string

    @Column()
    table_number: number

    @Column({default:false})
    check_in: boolean

}