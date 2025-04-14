import mongoose from "mongoose";

export const connectDB = async () => {
    try {
        await mongoose.connect('mongodb://localhost/tidytaskdb')  
    } catch (error) {
        console.error(error);
    }
};