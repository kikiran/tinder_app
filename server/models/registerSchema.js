import mongoose from "mongoose";

const registerSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    gender: {
      type: String,
      required: true,
    },
    dob: {
      type: Date,
      required: true,
    },
    imageUpload: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const RegisterModel = mongoose.model('register', registerSchema);

export default RegisterModel;