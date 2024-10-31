const User = require("../models/User");
const { StatusCodes } = require("http-status-codes");

const register = async (req, res) => {
  const user = await User.create({ ...req.body });
  res
    .status(StatusCodes.CREATED)
    .json({ name: user.name, token: user.createJWT() });
};

const login = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  console.log(user);
  if (!user) {
    throw new Error("No users could be found.");
  }
  const isMatch = await user.comparePassword(password);
  if (!isMatch) {
    throw new Error("Incorrect password");
  }
  res
    .status(StatusCodes.OK)
    .json({ userName: user.name, token: user.createJWT() });
};

module.exports = { register, login };
