const userRouter = require("express").Router()
const { signInController, signUpController, enrollCourseController, getAllCourseController } = require("../controllers/userController")

userRouter
    .post("/signin", signInController)
    .post("/signup", signUpController)
    .post("/enroll", enrollCourseController)
    .get("/get-course", getAllCourseController)

module.exports = { userRouter }