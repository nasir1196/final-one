import {NextResponse} from "next/server";
import {connect} from "@/dbConfig/dbConfig";
import Comment from "@/models/publicComment";


export async function GET() {
    try {
        await connect();
        const comments = await Comment.find();
        return NextResponse.json({message: "Comments Getting", data: comments})

    } catch (error:any) {
        return NextResponse.json({error: error.message, status: 500})
    }
}