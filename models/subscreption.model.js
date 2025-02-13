import mongoose from "mongoose";
const subscreption = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Subscreption Name is required"],
        trim: true,
        minlength: [3, "Subscreption Name should be at least 3 characters long"],
        maxlength: [32, "Subscreption Name should be at most 32 characters long"],
    },
    price: {
        type: Number,
        required:[true, "subscrition price is required"],
        min: [0, "Price should be at least 0"],
    }
    currency: {
        type: String,
        enum: ["USD", "EUR", "GBP"],
        default: "USD",
    },
    frequency: {
        type: String,
        enum: ["daily", "weekly", "monthly", "yearly"],
        default: "monthly",
    },
    category: {
        type: String,
        enum: ["sports", "news", "entertainment", "technology", "politics", "fashion", "health", "science", "other"],
        required: [true, "Category is required"],
    },
    paymentmethod: {
        type: String,
        enum: ["creditcard", "paypal", "stripe", "other"],
        required: [true, "Payment Method is required"],
        trim: true,
    },
    }    


}, { timestamps: true });
