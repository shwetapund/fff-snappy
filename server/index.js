import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;

const connection = async ()=>{
    const conn = await mongoose.connect(process.env.MONGODB_URI);
    if(conn){
        console.log("MonogDB is connected 💖")
    }
}
connection();


app.listen(PORT, () => {
    console.log(`server is running on Port ${PORT}`)
})