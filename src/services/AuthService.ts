import { AppDataSource } from "../config/data-source";
import { User } from "../models/User";
import bcrypt from "bcrypt"

export class AuthService{
    private repo =  AppDataSource.getRepository(User)

    async register(data:any){
        const exists = await this.repo.findOneBy({email: data.email})
        if(exists) throw new Error("email ja existe")

            const hash = await bcrypt.hash(data.password, 10)

            const user = this.repo.create({...data, password:hash})
            this.repo.save(user)
            return
    }
    async login(email:string, password: string){
        const user = await this.repo.findOneBy({email})
        if(!user) throw new Error("Usuário não encontrado")
        
        const valid = await bcrypt.compare(password, user.password)
        if(!valid) throw new Error("Senha invalida")
        
        return user 
    }
}