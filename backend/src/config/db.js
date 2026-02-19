import mongoose from "mongoose";

export async function connectDB() {
    
    // because this is on my local machine, no point in hiding it
    const DB_URL = "mongodb://localhost:27017/bookstore";

    try {
        await mongoose.connect(DB_URL);
        console.log(`Connected to our ${DB_URL}`);
    }
    catch(error) {
        console.error(`Couldn't connect to ${DB_URL}. Error: ${error}`);
        process.exit(1);
    }
}