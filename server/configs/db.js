import mongoose from "mongoose";

const connectdb = async() =>{
try {
    mongoose.connection.on('connected',()=>{
        console.log("Database Connected");
        
    })
await   mongoose.connect (`${process.env.MONGOOSE_URI}/bookshow`)
} catch (error) {
    console.log(error.message);
    
}
}

export default connectdb ;