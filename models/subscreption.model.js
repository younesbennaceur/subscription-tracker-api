import mongoose from "mongoose";
const subscreptionSchema = new mongoose.Schema({
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
    },
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
    status: {
        type: String,
        enum: ["active", "canceled", "expired"],
        default: "active",
    },
    startDate: {
        type: Date,
        required: [true, "Start Date is required"],
        validate: {
            validator: (date) =>  date <= new Date(),
            message: "Start Date should be in the past",
            }
        },
        renewalDate: {
            type: Date,
            validate: {
                validator: function(date) {
                    return date > this.startDate
                },
                message: "Renewal Date should be in the future",
                }
            },
            user: {
                type: mongoose.Schema.Types.ObjectId,
                ref: "User",
                required: [true, "User is required"],
                index: true,
            },
    }, { timestamps: true });
    subscreptionSchema.pre("save", function (next) {
        if (!this.renewalDate) {
            const renewalDate = new Date(this.startDate);
            const renewalPeriod = {
                daily: 1,
                weekly: 7,
                monthly: 1,
                yearly: 12,}
            }
            this.renewalDate = renewalDate;
            this.renewalDate.setDate(renewalDate.getDate() + renewalPeriod[this.frequency]);
        }
    );
    if (this.renewalDate <= new Date()) {
        this.status = "expired";
    }
    next();

    const Subscreption = mongoose.model("Subscreption", subscreptionSchema);
    export default Subscreption;
