const express = require("express")

const router = express.Router()

router.post("/signin", (req, res) => {
    res.json({message:"success"})
})

module.exports = router