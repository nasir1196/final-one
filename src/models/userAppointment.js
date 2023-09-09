import mongoose from "mongoose"

const Schema = mongoose.Schema;
mongoose.Promise = global.Promise

const userAppointment = new Schema({
    firstName: {
        type: String, required: [true, "please provide a first name"]
    },
    lastName: {
        type: String, required: [true, "please provide a last name"]
    },
    phone: {
        type: String, required: [true, "please provide phone number"]
    },
    houseNumber: {
        type: String, required: [true, "please provide house number"]
    },
    street: {
        type: String, required: [true, "please provide street address"]
    },
    city: {
        type: String, required: [true, "please provide city name"]
    },
    email: {
        type: String, required: [true, "please provide a email"]
    },
    describeIssue: {
        type: String, required: [true, "please note your issues"]
    },
})

const Appointment = mongoose.models.Appointments || mongoose.model("Appointments", userAppointment)

export default Appointment;