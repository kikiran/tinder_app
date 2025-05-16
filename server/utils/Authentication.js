import jwt from "jsonwebtoken";

const JWTToken = (id) => {
  const token = jwt.sign({ id: id }, process.env.SECRECT_KEY, {
    expiresIn: "7d",
  });

  return token;
};

export default JWTToken;
