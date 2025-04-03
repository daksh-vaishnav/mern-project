const mongoose = require('mongoose');

const courseForumPostSchema = new mongoose.Schema({
    courseId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Course',
        required: true
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
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
    },
    tags: [{
        type: String
    }]
}, { timestamps: true });

module.exports = mongoose.model('CourseForumPost', courseForumPostSchema);
