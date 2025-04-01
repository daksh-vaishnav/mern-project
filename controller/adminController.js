const signInController = (req, res) => {
    res.json({ message: "admin sign in success" })
}

const signUpController = (req, res) => {
    res.json({ message: "admin sign up success" })
}

const createCourseController = (req, res) => {
    res.json({ message: "admin create course success" })
}

const updateCourseController = (req, res) => {
    res.json({ message: "admin update course success" })
}


const getAllCourseController = (req, res) => {
    res.json({ message: "admin get all success" })
}

module.exports = {
    signInController,
    signUpController,
    createCourseController,
    updateCourseController,
    getAllCourseController
}