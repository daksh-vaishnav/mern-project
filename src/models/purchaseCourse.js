import mongoose from "mongoose";

const purchaseCourseSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    courseId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Course',
        required: true
    },
    pricePaid: {
        type: Number,
        required: true,
        min: 0
    },
    couponCode: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Coupon',
        default: null // Null if no coupon was used
    },
    purchaseDate: {
        type: Date,
        default: Date.now
    },
    status: {
        type: String,
        enum: ['active', 'cancelled', 'refunded'],
        default: 'active'
    }
}, { timestamps: true });

export const PurchaseCourse = mongoose.model('PurchaseCourse', purchaseCourseSchema);
