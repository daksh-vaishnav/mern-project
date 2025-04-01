const adminRouter = require("express").Router()
const { getAllCourseController, updateCourseController, signInController, signUpController, createCourseController } = require("../controllers/adminController")

adminRouter
    .post("/signin", signInController)
    .post("/signup", signUpController)
    .get("/course", getAllCourseController)
    .post("/course", createCourseController)
    .patch("/course", updateCourseController)

module.exports = { adminRouter }