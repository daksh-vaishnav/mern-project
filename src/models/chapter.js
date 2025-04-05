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
    contents: {
        type: String, // Assuming contents are stored as text or a URL to a content file
        required: true
    },
    isActive: {
        type: Boolean,
        default: true
    }
}, { timestamps: true });

export const Chapter = mongoose.model('Chapter', chapterSchema);