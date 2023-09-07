import {connect} from "@/dbConfig/dbConfig";
import {NextRequest, NextResponse} from "next/server";
import AppointmentDb from "@/models/userAppointment"
import User from "@/models/user";


connect().then(r => console.log(r))

export async function POST(request: NextRequest) {
    try {
        const requestBody = await request.json()
        const {firstName, lastName, email, phone, houseNumber, street, city, describeIssue} = requestBody;
        const user = await User.findOne({email})

        const newAppointment = new AppointmentDb({
            firstName, lastName, email, phone, houseNumber, street, city, describeIssue, userId: user._id
        })

        const savedAppointment = await newAppointment.save()
        return NextResponse.json({message: "Appointment created successfully", success: true, savedAppointment})

    } catch (error: any) {
        return NextResponse.json({error: error.message})
    }
}