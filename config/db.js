import mongoose from "mongoose";
const uri = "mongodb+srv://ravi:4298@atlascluster.tlcgbgf.mongodb.net/?retryWrites=true&w=majority";

export const connectToDb = async () => {
  try {
    await mongoose.connect(uri);
    console.log("MongoDB connected using mongoose");
  } catch (err) {
    console.log(err);
  }
};
