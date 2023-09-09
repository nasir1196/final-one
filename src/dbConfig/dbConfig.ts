import mongoose from "mongoose"

export async function connect() {
    try {
        await mongoose.connect(process.env.MONGO_URL!).then((res) => {
            if (res) {
                console.log("Connected to MongoDB")
            }
        }).catch((err) => console.log(err.message));

    } catch (error) {
        console.log(error)
    }
}
