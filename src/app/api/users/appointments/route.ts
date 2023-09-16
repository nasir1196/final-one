import {connect} from "@/dbConfig/dbConfig";
import {NextRequest, NextResponse} from "next/server";
import Appointment from "@/models/userAppointment"
import User from "@/models/user";
import {getDataFromToken} from "@/helpers/getDataFromToken";


export async function POST(request: NextRequest) {
    try {
        await connect();
        const userId = getDataFromToken(request)
        const requestBody = await request.json()
        const {firstName, lastName, email, phone, houseNumber, street, city, describeIssue} = requestBody;
        const user = await User.findOne({_id: userId}).select("-password")
        const newAppointment = new Appointment({
            firstName,
            lastName,
            email,
            phone,
            houseNumber,
            street,
            city,
            describeIssue,
            users: user
        })

        const savedAppointment = await newAppointment.save()
        return NextResponse.json({
            message: "Appointment created successfully",
            success: true,
            status: 201,
            savedAppointment
        })

    } catch (error: any) {
        return NextResponse.json({error: error.message, status: 400})
    }
}