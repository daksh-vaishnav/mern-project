const app = require('express')()
const dotenv = require("dotenv")
const routers = require("./routes")
dotenv.config({})



const PORT = process.env.PORT;


app.get("/", (req, res) => {
    res.send("hello world")
})

app.use("/api/v1", routers)

app.listen(PORT, () => {
    console.log(`server is running on port:${PORT}`);
})