import {connect} from "@/dbConfig/dbConfig";
import {NextRequest, NextResponse} from "next/server";
import AppointmentDb from "@/models/userAppointment"
import User from "@/models/user";



export async function POST(request: NextRequest) {
    try {
        const requestBody = await request.json()
        const {firstName, lastName, email, phone, houseNumber, street, city, describeIssue} = requestBody;
        await connect();
        const user = await User.findOne({email})
        await AppointmentDb.create({firstName, lastName, email, phone, houseNumber, street, city, describeIssue, userId: user._id})

        return NextResponse.json({message: "Appointment created successfully", success: true, status:201})

    } catch (error: any) {
        return NextResponse.json({error: error.message, status:400})
    }
}