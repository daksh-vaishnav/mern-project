import { compareHashPassword, generateJWT, getHashPassword } from "#helpers/utils";
import { User } from "#models/user";
import { Course } from "#models/course";



export const signUpController = async (req, res) => {
    const { name, email, password } = req.body
    try {
        const hashPassword = await getHashPassword(password);
        const user = await User.create({ name, email, password: hashPassword, role: "user" });
        res.status(200).json({ message: "user successfully created..." })
    } catch (error) {
        console.log(error);
        res.status(500).json({ error })
    }
}

export const signInController = async (req, res) => {
    const { email, password } = req.body
    try {
        const user = await User.findOne({ email }).select("+password");

        const isMatched = await compareHashPassword(password, user.password)
        if (!isMatched) {
            return res.status(500).json({ message: "Invalid Creds" })
        }
        const payload = { id: user._id.toString() }
        const accessToken = await generateJWT(payload)
        res.status(200).json({ message: "user sign in success", accessToken })

    } catch (error) {
        console.log(error.message);
        res.status(500).json({ error, message: error.message })
    }
}

export const enrollCourseController = (req, res) => {
    res.json({ message: "enroll course" })
}

export const getAllCourseController = async (req, res) => {

    try {
        const courses = await Course.find({ isActive: true }).select('-chapters -createdAt -updatedAt -isActive -__v');
        res.status(200).json({ message: "get all course user", courses })
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "something went wrong..." })
    }


}