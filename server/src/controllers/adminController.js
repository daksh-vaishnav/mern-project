import { User } from "#models/user";
import { compareHashPassword, generateJWT, getHashPassword } from "#helpers/utils";

export const signUpController = async (req, res) => {
    const { name, email, password } = req.body
    try {
        const hashPass = await getHashPassword(password);
        const admin = await User.create({ name, email, password: hashPass, role: "admin" })
        res.status(200).json({ message: "admin user successfully created..." })
    } catch (error) {
        console.log(error);
        return res.status(500).json({ error, message: "something went wrong" })
    }
}

export const signInController = async (req, res) => {
    const { email, password } = req.body;
    try {
        const hashPass = await getHashPassword(password)
        const admin = await User.findOne({ email }).select("+password");
        const isMatched = await compareHashPassword(password, hashPass)
        if (!isMatched) {
            return res.status(500).json({ message: "Invalid Creds" })
        }
        const payload = { id: (await admin)._id.toString() }
        const accessToken = await generateJWT(payload);
        return res.status(200).json({ message: "success", accessToken })
    } catch (error) {
        console.log(error);

        return res.status(500).json({ message: "something went wrong" })
    }

}

export const createCourseController = (req, res) => {
    res.json({ message: "admin create course success" })
}

export const addChapterToCourseController = (req, res) => {
    res.json({ message: "admin create chapter success" })
}

export const addContentToChapterController = (req, res) => {
    res.json({ message: "admin create content success" })
}

export const updateCourseController = (req, res) => {
    res.json({ message: "admin update course success" })
}


export const getAllCourseController = (req, res) => {
    res.json({ message: "admin get all success" })
}
