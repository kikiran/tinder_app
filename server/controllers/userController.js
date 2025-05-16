import bcrypt from "bcryptjs";
import UserModel from "../models/userSchema.js";
import JWTToken from "../utils/Authentication.js";

export const register = async (req, res) => {
  const { name, email, password, confirmPassword } = req.body;

  // 1. Basic field validation
  if (!name || !email || !password || !confirmPassword) {
    return res.status(400).json({
      success: false,
      message: "All fields are required",
    });
  }

  // 2. Check if passwords match
  if (password !== confirmPassword) {
    return res.status(400).json({
      success: false,
      message: "Passwords do not match",
    });
  }

  try {
    // 3. Check if user already exists
    const existingUser = await UserModel.findOne({ email });
    if (existingUser) {
      return res.status(409).json({
        success: false,
        message: "User already exists",
      });
    }

    // 4. Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // 5. Create user
    const newUser = new UserModel({
      name,
      email,
      password: hashedPassword,
    });

    await newUser.save();

    //Generate JWT token

    const token = JWTToken(newUser._id);

    // 6. Respond with success
    res.status(201).json({
      success: true,
      token,
      message: "User registered successfully",
    });
  } catch (error) {
    console.error("Registration error:", error);
    res.status(500).json({
      success: false,
      message: "Something went wrong",
    });
  }
};

export const login = async (req, res) => {
  const { email, password } = req.body;

  //basic field validation
  if (!email || !password) {
    res.status(400).json({
      success: false,
      message: "Email and password required!",
    });
  }

  //Checking user
  try {
    const fetchUser = await UserModel.findOne({ email });
    if (!fetchUser) {
     return res.status(400).json({
        success: false,
        message: "Invalid Email",
      });
    }

    const passwordMatch = await bcrypt.compare(password, fetchUser.password);
    if (!passwordMatch) {
     return res.status(400).json({
        success: false,
        message: "Password not match",
      });
    }

    //Verify Token
    const token = JWTToken(fetchUser._id);
    return res.status(200).json({
      success: true,
      token
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};
