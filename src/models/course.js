const mongoose = require("mongoose");

const courseSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    thumbnailUrl: { type: String, required: false },
    content: [{
        type: { type: String, enum: ['VIDEO', 'DOC'], default: "VIDEO" },
        url: { type: String, required: true }
    }]
}, { timestamps: true });

const Course = mongoose.model("Course", courseSchema);

module.exports = Course;
