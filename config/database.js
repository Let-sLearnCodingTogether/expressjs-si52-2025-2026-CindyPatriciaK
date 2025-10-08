import mongoose from "mongoose";

export const database = async () => {
    try {
        console.log("Starting connection to mongodb...");

        const response = await mongoose.connect("mongodb+srv://cindypatriciakadir2327240008_db_user:babigilo@cluster0.jmhtoku.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")

        console.log (`Connected successfully to mongodb at : ${response.connection.host}`);

    }catch (error){
            console.log("Mongodb connection failed");

            process.exit(1)
    }
}