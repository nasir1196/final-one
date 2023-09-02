import {connect} from '@/dbConfig/dbConfig';
import {NextResponse} from "next/server";
import User from "@/models/user";

connect().then(r => console.log(r))

export async function GET() {
    try {
        const user = await User.find()

        return NextResponse.json({message: "User created successfully", success: true, user})

    } catch (error: any) {
        return NextResponse.json({error: error.message})
    }
}