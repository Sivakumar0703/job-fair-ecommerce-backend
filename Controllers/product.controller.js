import Product from "../Model/product.model.js"

// get all products
export const getAllProducts = async(req,res) =>{
    try {
        const products = await Product.find({})
        res.status(200).json({message:"successfully fetched all products",count:products.length,products:products}) 
    } catch (error) {
        res.status(500).json({message:"internal server error"})
    }
}

// add products to db
export const addProduct = async(req,res) => {
    const {name,brand} = req.body
    try {
        const checkAvailability = await Product.find({"name":name , "brand":brand});
        if(checkAvailability[0]){
            return res.status(500).json({message:"This product is already exists"})
        }
       const newProduct = await Product.create(req.body);
       res.status(200).json({message:"new product is added",product:newProduct}) 
    } catch (error) {
        res.status(500).json({message:"internal server error"})
    }
}