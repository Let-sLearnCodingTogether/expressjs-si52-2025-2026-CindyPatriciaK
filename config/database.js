import mongoose from "mongoose";

export const database = async () => {
    try {
        console.log("Starting connection to mongodb...");

        const response = await mongoose.connect("https://github.com/Let-sLearnCodingTogether/expressjs-si52-2025-2026-kuis-1-CindyPatriciaK.git")

        console.log (`Connected successfully to mongodb at : ${response.connection.host}`);

    }catch (error){
            console.log("Mongodb connection failed");

            process.exit(1)
    }
}