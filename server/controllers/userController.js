const asyncHandler = require("express-async-handler");
const generateToken = require("../utils/generateToken.js");
const User = require("../models/model.user.js");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");


exports.authUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  try {
    const getUser = await User.findOne({ email });

    if (!getUser)
      return res.status(404).json({ message: "User doesn't exist" });

    const isPasswordCorrect = await bcrypt.compare(password, getUser.password);

    if (!isPasswordCorrect)
      return res.status(400).json({ message: "Invalid credentials" });

    const token = jwt.sign({ email: getUser.email, id: getUser._id }, process.env.SECRET_TOKEN || 'TEST', {
      expiresIn: "1h",
    });

    res.status(200).json({ result: getUser, token });
  } catch (err) {
    res.status(500).json({ message: "Something went wrong" });
  }

});


exports.registerUser = asyncHandler(async (req, res) => {
	const { email, password, username } = req.body;

	try {
	  const oldUser = await User.findOne({ email });
  
	  if (oldUser) return res.status(400).json({ message: "User already exists" });
  
	  const hashedPassword = await bcrypt.hash(password, 12);
  
	  const result = await User.create({ email, password: hashedPassword, username});
  
	  const token = jwt.sign( { email: result.email, username: result.username,id: result._id }, process.env.SECRET_TOKEN || 'TEST', { expiresIn: "1h" } );
  
	  res.status(201).json({ result, token });
	} catch (error) {
	  res.status(500).json({ message: "Something went wrong" });
	  
	  console.log(error);
	}
});
