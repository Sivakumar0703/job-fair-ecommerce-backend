import mongoose from "mongoose";
import dotenv from "dotenv"

dotenv.config()

const connectionString = `mongodb+srv://${process.env.USER}:${process.env.PASSWORD}@cluster0.ltrxc.mongodb.net/ecom`

const connectDb = async() => {
    try {
       await mongoose.connect(connectionString)
       console.log("database connected...") 
    } catch (error) {
        console.log("error in connecting database",error)
    }
}

export default connectDb