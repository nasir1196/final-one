import { NextResponse} from "next/server";
import User from "@/models/user";
import {connect} from "@/dbConfig/dbConfig";


export async function GET() {
    try {
        await connect()
        const user = await User.find()
        return NextResponse.json({message: "User found", data: user})
    } catch (error: any) {
        return NextResponse.json({error: error.message}, {status: 400})
    }
}