import mongoose from "mongoose";

const progressSchema = new mongoose.Schema({
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    course_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Course',
        required: true
    },
    chapter_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Chapter',
        required: true
    },
    progress: {
        type: Number, // Assuming progress is stored as a percentage (0-100)
        required: true,
        min: 0,
        max: 100
    }
}, { timestamps: true });

export const Progress = mongoose.model('Progress', progressSchema);
