import mongoose from "mongoose"

export async function connect(){
    try{
       // await mongoose.connect(process.env.MONGO_URL !)
       //  const connection = mongoose.connection;
       //
       //  connection.on("connected",()=>{
       //      console.log("MongoDB connected successfully")
       //  })
       await mongoose.connect(process.env.MONGO_URL!);
        console.log("Connected to MongoDB")
    }catch (error){
        console.log(error)
    }
}
