import mongoose from "mongoose"
import { envs } from "./envs"

export const dbConnection = async () => {
    try {
        await mongoose.connect( envs.MONGO_DB_CONNECTION );
        console.log('database online');
    } catch (error) {
        console.log( error );
    }
}





