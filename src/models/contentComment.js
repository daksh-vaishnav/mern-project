import mongoose from 'mongoose';

const contentCommentSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    contentId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Content',
        required: true
    },
    text: {
        type: String,
        required: true
    },
    like: {
        type: Number,
        default: 0
    },
    dislike: {
        type: Number,
        default: 0
    },
    replies: {
        type: Number,
        default: 0
    }
}, { timestamps: true });

export const ContentComment = mongoose.model('ContentComment', contentCommentSchema);