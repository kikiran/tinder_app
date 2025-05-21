import jwt from "jsonwebtoken";
import UserModel from "../models/userSchema.js";

export const JWTToken = (id) => {
  const token = jwt.sign({ id: id }, process.env.SECRECT_KEY, {
    expiresIn: "7d",
  });

  return token;
};


export const AuthUser = async (req, res) => {
  try {
    const { token } = req.cookies;
    if (!token) {
      return res.status(401).json({
        success: false,
        message: "Token invalid or missed!"
      })
    }

    const decoded = await jwt.verify(token, process.env.SECRECT_KEY);
    const user = await UserModel.findById(decoded.id);
    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found!"
      })
    }
  
    res.status(200).json({
      success: true,
      data: user
    })

  } catch (error) {
    return res.status(401).json({ message: "Unauthorized!"})
  }
}