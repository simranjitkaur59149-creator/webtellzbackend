import mongoose from "mongoose"
import dotenv from "dotenv"
dotenv.config()
const DbConnection=()=>mongoose.connect(process.env.MONGODB).then(()=>console.log(" Database is connected")).catch((err)=>console.log(err))
export default DbConnection