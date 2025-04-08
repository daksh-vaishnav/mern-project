import mongoose from 'mongoose';

const couponSchema = new mongoose.Schema({
    couponCode: {
        type: String,
        required: true,
        trim: true
    },
    type: {
        type: String,
        enum: ['flat', 'percentage'],
        required: true
    },
    discount: {
        type: Number,
        required: true,
        min: 0
    },
    minOrder: {
        type: Number,
        default: 0
    },
    maxDiscount: {
        type: Number,
        default: null // Null if no max limit on discount
    },
    validTill: {
        type: Date,
        required: true
    },
    validFor: {
        type: String,
        enum: ['all', 'selectedCourse'],
        required: true
    },
    selectedCourses: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Course'
    }]
}, { timestamps: true });

export const Coupon = mongoose.model('Coupon', couponSchema);