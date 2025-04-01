const mongoose = require("mongoose");
const dotenv = require("dotenv");
const User = require("../models/user.model"); // Adjust the path if necessary
const Course = require("../models/course.model"); // Required for ObjectId references
const bcrypt = require("bcrypt");

// Load environment variables
dotenv.config();

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log("🌱 Database connected..."))
    .catch(err => console.log("❌ DB Connection Error:", err));

// Function to seed users
const seedUsers = async () => {
    try {
        // Clear existing users (optional)
        await User.deleteMany();
        console.log("🗑️ Cleared existing users");

        // Fetch some courses to assign to users
        const courses = await Course.find().limit(2); // Assuming courses exist in DB

        // Dummy users
        const users = [
            {
                name: "John Doe",
                email: "john@example.com",
                password: await bcrypt.hash("password123", 10), // Hash password
                role: "USER",
                enrolledCourses: courses.map(course => course._id)
            },
            {
                name: "Jane Smith",
                email: "jane@example.com",
                password: await bcrypt.hash("password123", 10),
                role: "ADMIN",
                enrolledCourses: []
            }
        ];

        // Insert users into DB
        await User.insertMany(users);
        console.log("✅ Users seeded successfully!");
    } catch (error) {
        console.error("❌ Seeding error:", error);
    } finally {
        mongoose.disconnect();
    }
};

// Run the seeder
seedUsers();
