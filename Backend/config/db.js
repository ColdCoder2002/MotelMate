import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const connectdb = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URL)
        console.log("Database was Connected Successfully");
    } catch(error) {
        console.log("Something Went wrong in MongoDb");
        process.exit(1);
    }
}

export default connectdb;