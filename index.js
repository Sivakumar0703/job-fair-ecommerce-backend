import express from "express"
import "dotenv/config"
import cors from "cors"
import connectDb from "./database/dbConfig.js"
import productRouter from "./Routers/product.router.js"



const app = express()
const port = process.env.PORT;

app.use(cors())
app.use(express.json())
app.use("/api/product",productRouter)

connectDb()


app.listen(port , () => {
    console.log("server started at port ", port)
})

// {
//     "name":"",
//     "description":"",
//     "image":"",
//     "price": ,
//     "quantity": ,
//     "category":"",
//     "sub_category":"",
//     "brand":""
// }