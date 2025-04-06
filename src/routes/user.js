import { Router } from "express";
import { signInController, signUpController, enrollCourseController, getAllCourseController } from "#controllers/userController";
import { validate } from "#middlewares/zodValidation";
import { signUpValidationSchema, signInValidationSchema } from "#validators/user";

const userRouter = Router();

userRouter
    .post("/signup", validate(signUpValidationSchema), signUpController)
    .post("/signin", validate(signInValidationSchema), signInController)
    .post("/enroll", enrollCourseController)
    .get("/get-course", getAllCourseController)

export default userRouter;