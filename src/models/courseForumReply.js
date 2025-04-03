const mongoose = require('mongoose');

const courseForumReplySchema = new mongoose.Schema({
    questionId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'CourseForumPost',
        required: true
    },
    parentReplyId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'CourseForumReply',
        default: null // Null if it's a direct reply to the question
    },
    text: {
        type: String,
        required: true
    },
    likes: {
        type: Number,
        default: 0
    },
    dislikes: {
        type: Number,
        default: 0
    },
    replies: {
        type: Number,
        default: 0
    }
}, { timestamps: true });

module.exports = mongoose.model('CourseForumReply', courseForumReplySchema);
