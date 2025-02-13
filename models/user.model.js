import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name:{
        type: String,
        required:[true, "Name is required"],
        trim: true,
        minlength: 3,
        maxlength: 50
    },
    email:{
        type: String,
        required:[true, "Email is required"],
        trim: true,
        unique: true,
        lowercase: true,
        match: [/^[^\s@]+@[^\s@]+\.[^\s@]+$/, "Please enter a valid email address"]
    },
    password:{
        type: String,
        required:[true, "Password is required"],
        trim: true,
        minlength: 6,
        maxlength: 100
    },
    
},{timestamps: true});
const User = mongoose.model("User", userSchema) // User is the name of the collection   
export default User;
// {name: "John Doe", email: "johndoe@gmail.com", password: "password"}