const adminRouter = require("express").Router()
const { getAllCourseController, updateCourseController, signInController, signUpController, createCourseController } = require("../controller/adminController")

adminRouter
    .post("/signin", signInController)
    .post("/signup", signUpController)
    .get("/course", getAllCourseController)
    .post("/course", createCourseController)
    .patch("/course", updateCourseController)

module.exports = { adminRouter }