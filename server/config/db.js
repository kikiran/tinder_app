import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("DB connected successfull");
  } catch (error) {
    console.log("Something went wrong", error.message);
    process.exit(1);
  }
};

export default connectDB;
