import {NextRequest, NextResponse} from "next/server";
import {connect} from "@/dbConfig/dbConfig";
import Comment from "@/models/publicComment";


export async function POST(request: NextRequest) {
    try {
        await connect();

        const reqBody = await request.json();
        const {name, email, message} = reqBody;

        const newComment = new Comment({
            name, email, message
        })
        const savedComment = await newComment.save();
        return NextResponse.json({
            message: "Comment created successfully",
            success: true,
            status: 201,
            savedComment
        })
    } catch (error: any) {
        return NextResponse.json({error: error.message, status: 404})
    }
}