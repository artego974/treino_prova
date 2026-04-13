import { AppDataSource } from "./config/data-source";
import cors from "cors"
import  express  from "express";

const app = express()
const port = 3000

 app.use(cors())
 app.use(express.json())

 AppDataSource.initialize().then(()=>{
    console.log("Banco conectado")
    app.listen(port, () => {
      console.log("servidor rodando na porta ", port);
    });
 })