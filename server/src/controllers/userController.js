import { compareHashPassword, generateJWT, getHashPassword } from "#helpers/utils";
import { User } from "#models/user";
import { Course } from "#models/course";
import { PurchaseCourse } from "#models/purchaseCourse";
import { Coupon } from "#models/coupon";
import mongoose from "mongoose";



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

export const enrollCourseController = async (req, res) => {
    const { userId } = req.user
    const { courseId, couponCode } = req.body
    const purchaseDate = new Date()
    try {
        const course = await Course.findById(courseId);
        const coursePrice = course.price
        if (!course) {
            return res.status(500).json({ message: "Invalid Course" })
        }
        const coupon = await Coupon.findOne({ couponCode })
        let discount = 0;
        if (coupon.type === 'flat' && coupon.minOrder < coursePrice) {
            if (coupon.validFor === 'all' || coupon.selectedCourses.includes(courseId)) {
                discount = coupon.discount
            }
        } else if (coupon.type === 'percentage' && coupon.minOrder < coursePrice) {
            if (coupon.validFor === 'all' || coupon.selectedCourses.includes(courseId)) {
                let calDiscount = (coupon.discount * coursePrice) / 100;
                console.log({ calDiscount });
                discount = calDiscount > coupon.maxDiscount ? coupon.maxDiscount : calDiscount
            }
        }

        const userPurchase = await PurchaseCourse.create({ userId, courseId, pricePaid: parseInt(coursePrice - discount), couponCode: coupon._id, purchaseDate })
        res.status(200).json({ message: "successfully enroll in course" })
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "something went wrong" })
    }
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