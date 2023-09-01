import mongoose from "mongoose"

const Schema = mongoose.Schema;
mongoose.Promise = global.Promise

const userSchema = new Schema({
    firstName: {
        type: String, required: [true, "please provide a first name"],
    },
    lastName: {
        type: String, required: [true, "please provide a last name"],
    },
    phone: {
        type: String, required: [true, "please provide a last name"],
    },
    street: {
        type: String, required: [true, "please provide a last name"],
    },
    city: {
        type: String, required: [true, "please provide a last name"],
    },
    email: {
        type: String, required: [true, "please provide a email"], unique: true
    },
    password: {
        type: String, required: [true, "please provide password"]
    },
    isVerified: {
        type: Boolean, default: false
    },
    isAdmin: {
        type: Boolean, default: false
    },
    forgotPasswordToken: String,
    forgotPasswordTokenExpiry: Date,
    verifyTokenExpiry: Date,
})

const User = mongoose.model.user || mongoose.model("user", userSchema);

export default User;