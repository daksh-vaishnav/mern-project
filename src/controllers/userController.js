const signInController = (req, res) => {
    res.json({ message: "user sign in success" })
}

const signUpController = (req, res) => {
    res.json({ message: "user sign up success" })
}

const enrollCourseController = (req, res) => {
    res.json({ message: "enroll course" })
}

const getAllCourseController = (req, res) => {
    res.json({ message: "get all course user" })
}

module.exports = {
    signInController,
    signUpController,
    enrollCourseController,
    getAllCourseController
}