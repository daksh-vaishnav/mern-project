import { getHashPassowrd } from "#helpers/utils";



export const signUpController = (req, res) => {
    const { name, email, password } = req.body
    let hashPassword = getHashPassowrd(password)

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