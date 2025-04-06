import { getHashPassowrd } from "#helpers/utils";
import { User } from "#models/user";
import { Error } from "mongoose";



export const signUpController = async (req, res) => {
    const { name, email, password } = req.body
    try {
        const hashPassword = await getHashPassowrd(password);
        const user = await User.create({ name, email, password: hashPassword, role: "user" });
        res.status(200).json({ message: "user successfully created..." })
    } catch (error) {
        // if (error instanceof Error) {
        //     console.log("=============================================");
        //     console.log(error);
        //     console.log("=============================================");
        // }
        console.log(error);
        res.status(500).json({ error })
    }
}

export const signInController = (req, res) => {
    res.json({ message: "user sign in success" })
}

export const enrollCourseController = (req, res) => {
    res.json({ message: "enroll course" })
}

export const getAllCourseController = (req, res) => {
    res.json({ message: "get all course user" })
}