import mongoose from "mongoose"

const productSchema = mongoose.Schema({

  name:{
    type:String,
    require:true
  },  
  description:{
    type:String,
    require:true
  },
  image:{
    type:String,
    require:true
  },
  price:{
    type:Number,
    require:true
  },
  quantity:{
    type:Number,
    require:true
  },
  category:{
    type:String,
    require:true
  },
  sub_category:{
    type:String,
    require:true
  },
  brand:{
    type:String,
    require:true
  }

})

const Product = mongoose.model("products",productSchema)
export default Product