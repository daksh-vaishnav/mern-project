import { Router } from "express";
import { getAllCourseController, updateCourseController, signInController, signUpController, createCourseController } from "#controllers/adminController";
import { validate } from "#middlewares/zodValidation";
import { signUpValidationSchema, signInValidationSchema } from "#validators/user";

const adminRouter = Router();

adminRouter
    .post("/signup", validate(signUpValidationSchema), signUpController)
    .post("/signin", validate(signInValidationSchema), signInController)
    .get("/course", getAllCourseController)
    .post("/course", createCourseController)
    .patch("/course", updateCourseController)

export default adminRouter