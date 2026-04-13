import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity("user")
export class User{

    @PrimaryGeneratedColumn()
    id: number

    @Column({length:100})
    name: string

    @Column({unique:true, length:100})
    email:string

    @Column({unique:true, length:11})
    cpf:string

    @Column({length: 255})
    password:string

    @Column()
    role:string
}