import express from 'express';
import dotenv from 'dotenv';
import router from './src/routes/index.js';
import { connectDB } from './src/config/db.js';

const app = express();
dotenv.config({})



const PORT = process.env.PORT;


app.get("/", (req, res) => {
    res.send("hello world")
})

app.use("/api/v1", router)

app.listen(PORT, async () => {
    await connectDB()
    console.log(`server is running on port:${PORT}`);
})