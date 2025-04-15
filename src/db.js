import mongoose from "mongoose";

export const connectDB = async () => {
    try {
        await mongoose.connect('mongodb://localhost/tidytaskdb') 
        console.log('DB connected')
    } catch (error) {
        console.error(error);
    }
};