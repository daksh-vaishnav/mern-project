import mongoose from 'mongoose';

const contentSchema = new mongoose.Schema({
    type: {
        type: String,
        required: true,
        enum: ['video', 'article', 'quiz', 'pdf', 'other'] // Define possible content types
    },
    link: {
        type: String, // Assuming it's a URL
        required: true
    },
    metadata: {
        type: mongoose.Schema.Types.Mixed, // Can store additional info like duration, format, etc.
        default: {}
    },
    isActive: {
        type: Boolean,
        default: true
    }
}, { timestamps: true });

export const Content = mongoose.model('Content', contentSchema);
