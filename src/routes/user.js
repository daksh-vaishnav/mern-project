import { Router } from "express";
import { signInController, signUpController, enrollCourseController, getAllCourseController } from "#controllers/userController";

const userRouter = Router();

userRouter
    .post("/signup", signUpController)
    .post("/signin", signInController)
    .post("/enroll", enrollCourseController)
    .get("/get-course", getAllCourseController)

export default userRouter;