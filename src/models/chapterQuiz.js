const mongoose = require('mongoose');

// Quiz Schema
const quizSchema = new mongoose.Schema({
    chapterId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Chapter',
        required: true
    },
    title: {
        type: String,
        required: true,
        trim: true
    },
    isActive: {
        type: Boolean,
        default: true
    }
}, { timestamps: true });

// Question Schema
const questionSchema = new mongoose.Schema({
    quizId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Quiz',
        required: true
    },
    text: {
        type: String,
        required: true
    },
    options: [{
        text: { type: String, required: true },
        isCorrect: { type: Boolean, required: true }
    }],
    isActive: {
        type: Boolean,
        default: true
    }
}, { timestamps: true });

// User Quiz Attempt Schema
const userQuizAttemptSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    quizId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Quiz',
        required: true
    },
    score: {
        type: Number,
        required: true,
        min: 0
    },
    totalQuestions: {
        type: Number,
        required: true,
        min: 1
    },
    correctAnswers: {
        type: Number,
        required: true,
        min: 0
    },
    attemptedAt: {
        type: Date,
        default: Date.now
    }
}, { timestamps: true });

module.exports = {
    Quiz: mongoose.model('Quiz', quizSchema),
    Question: mongoose.model('Question', questionSchema),
    UserQuizAttempt: mongoose.model('UserQuizAttempt', userQuizAttemptSchema)
};