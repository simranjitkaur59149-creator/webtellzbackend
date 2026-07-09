import express from "express"
import cors from "cors"
import DbConnection from "./utils/Database.js"
import routes from "./router/router.js"

const app=express()
const PORT=8000
DbConnection()
app.use(
  cors({
    origin: "https://webtellz.vercel.app",
    credentials: true,
  })
);
app.use(express.json())
app.use("/uploads",express.static("uploads"))
app.use("/",routes)
app.listen(PORT,()=>console.log("Server is working"))