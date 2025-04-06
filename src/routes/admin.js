import { Router } from "express";
import { getAllCourseController, updateCourseController, signInController, signUpController, createCourseController } from "#controllers/adminController";

const adminRouter = Router();

adminRouter
    .post("/signup", signUpController)
    .post("/signin", signInController)
    .get("/course", getAllCourseController)
    .post("/course", createCourseController)
    .patch("/course", updateCourseController)

export default adminRouter