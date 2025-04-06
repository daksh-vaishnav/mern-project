import mongoose from 'mongoose';

const chapterSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String,
        required: true
    },
    thumbnailImage: {
        type: String, // Assuming this is a URL
        required: true
    },
    contents: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Content'
    }],
    isActive: {
        type: Boolean,
        default: true
    }
}, { timestamps: true });

const courseSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String,
        required: true
    },
    thumbnailImage: {
        type: String, // Assuming this is a URL
        required: true
    },
    chapters: [chapterSchema],
    price: {
        type: Number,
        required: true,
        min: 0
    },
    isActive: {
        type: Boolean,
        default: true
    }
}, { timestamps: true });

export const Course = mongoose.model('Course', courseSchema);
