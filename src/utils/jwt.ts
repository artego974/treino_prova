import jwt from "jsonwebtoken"

export const gereteToken = (payload:any)=>{
    return jwt.sign(payload, process.env.JWT_SECRET!,{
        expiresIn: process.env.JWT_EXPIRES_IN
    })
}

export const verifyToken = (token:string) =>{
    try{
        jwt.verify(token, process.env.JWT_SECRET!)
        return
    }catch{
        return null
    }
}