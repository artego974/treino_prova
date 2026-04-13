import { Request, Response, NextFunction } from "express";
import {verifyToken} from "../utils/jwt"

export const authMiddleware = (req:Request , res:Response, next: NextFunction)=>{
    const header = req.headers.authorization

    if(!header || !header.startsWith("Bearer")){
        res.status(401).json({message : "token não foi fornecido"})
        return
    }
    const token  = header.split("")[1];
    const decoded = verifyToken(token)
    if(!decoded){
        res.status(401).json({message: "token invalido"})
    }
    (req as any).user = decoded

    next()
}