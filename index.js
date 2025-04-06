import express from 'express';
import dotenv from 'dotenv';
import router from '#src/routes/index';
import { connectDB } from '#src/config/db';
import { errorHandler } from '#middlewares/errorHandler'
dotenv.config({})
const app = express();
app.use(express.json())
app.use(express.urlencoded({ extended: true }));


const PORT = process.env.PORT;


app.get("/", (req, res) => {
    res.send("hello world")
})

app.use("/api/v1", router)


app.use(errorHandler);
app.listen(PORT, async () => {
    await connectDB()
    console.log(`server is running on port:${PORT}`);
})