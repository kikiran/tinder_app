import RegisterModel from "../models/registerSchema.js";

export const getFeed = async (req, res) => {
  const { email } = req.body;
  try {
    const users = await RegisterModel.find({ email });

    if (!users) {
      return res
        .status(404)
        .json({ success: false, message: "Something wen wrong !" });
    }

    return res.status(200).json({
      success: true,
      data: res.data,
    });
  } catch (error) {
    throw new Error(error.message);
  }
};
