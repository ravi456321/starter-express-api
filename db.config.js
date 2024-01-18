import mongoose from 'mongoose';

const uri = "mongodb+srv://ravi:4298@atlascluster.tlcgbgf.mongodb.net/?retryWrites=true&w=majority";

export const connectToDatabase = async () => {
    try {
        await mongoose.connect(uri , {
           useNewUrlParser: true,
           useUnifiedTopology: true
       });
        console.log("MongoDB connected using mongoose");
    } catch (err) {
        console.log(err);
    }
}
