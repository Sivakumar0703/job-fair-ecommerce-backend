import express from "express"
import { addProduct , getAllProducts } from "../Controllers/product.controller.js"

const productRouter = express.Router()

productRouter.get("/",getAllProducts)
productRouter.post("/add_product",addProduct)

export default productRouter