import mongoose from 'mongoose';

const commentReplySchema = new mongoose.Schema({
    commentId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'ContentComment',
        required: true
    },
    parentReplyId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'ContentCommentReply',
        default: null // Null if it's a direct reply to a comment
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

export const CommentReply = mongoose.model('CommentReply', commentReplySchema);
