const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

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
            minlength: [6, "Password must be at least 6 characters"],
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

// Hash password before saving
userSchema.pre("save", async function (next) {
    if (!this.isModified("password")) return next();

    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
});

// Compare passwords (for login)
userSchema.methods.comparePassword = async function (enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.password);
};

// Create Indexes for Performance
userSchema.index({ email: 1 });

const User = mongoose.model("User", userSchema);
module.exports = User;


// const User = require("./models/user");

// async function registerUser(name, email, password) {
//   const newUser = new User({ name, email, password });
//   await newUser.save();
//   console.log("User registered successfully!");
// }

// registerUser("John Doe", "john@example.com", "securepassword");


// async function loginUser(email, enteredPassword) {
//     const user = await User.findOne({ email }).select("+password"); // Get password field
//     if (!user) return console.log("User not found");
  
//     const isMatch = await user.comparePassword(enteredPassword);
//     if (!isMatch) return console.log("Invalid password");
  
//     console.log("Login successful!");
//   }
  
//   loginUser("john@example.com", "securepassword");
  