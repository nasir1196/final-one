import mongoose from "mongoose"

const Schema = mongoose.Schema;
mongoose.Promise = global.Promise

const commentSchema = new Schema({
    name: {
        type: String, required: [true, "Enter Your Name!"]
    }, email: {
        type: String, required: [true, "Enter Your Email"]
    }, message: {
        type: String, required: [true, "Please leave your comments"]
    }
})

const Comment = mongoose.models.Comments || mongoose.model("Comments", commentSchema);

export default Comment;