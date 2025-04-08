import mongoose from "mongoose";

// Define User Schema
const userSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "Name is required"],
            trim: true,
        },
        email: {
            type: String,
            required: [true, "Email is required"],
            unique: true,
            lowercase: true,
            trim: true,
            match: [/\S+@\S+\.\S+/, "Invalid email format"], // Regex for email validation
        },
        password: {
            type: String,
            required: [true, "Password is required"],
            minlength: [8, "Password must be at least 8 characters"],
            select: false, // Prevent password from being returned in queries
        },
        role: {
            type: String,
            enum: ["user", "admin"],
            default: "user",
        },
        is_active: {
            type: Boolean,
            default: true,
        },
    },
    { timestamps: true } // Automatically adds createdAt & updatedAt
);

// Create Indexes for Performance
// no need for this becuase using unique constraints by default its has already created index on that column 
// userSchema.index({ email: 1 });

export const User = mongoose.model("User", userSchema);