import config from "../config/config";
const jwt = require("jsonwebtoken");

const generateToken = (data, expires = 1) => {
  return jwt.sign(data, config.jwtKey, {
    expiresIn: 86400 * expires // default expires in 24 hours
  });
};

const verifyToken = token => {
  try {
    return jwt.verify(token, config.jwtKey);
  } catch (err) {
    return null;
  }
};

export default {
  generateToken,
  verifyToken
};
