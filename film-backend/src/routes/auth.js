const express = require("express");
const router = express.Router();
const { register, login } = require("../controllers/auth");

const authRouter = router.post("/register", register).post("/login", login);

module.exports = authRouter;
