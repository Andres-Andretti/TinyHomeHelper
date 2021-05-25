const jwt = require("jsonwebtoken");
const asyncHandler = require("express-async-handler");
const User = require("../models/model.user");

const auth = async (req, res, next) => {
	try {
		const token = req.headers.Authorization.split(" ")[1];
		const isCustomAuth = token.length < 500;
		let decodedData;
		if (token && isCustomAuth) {
			decodedData = jwt.verify(token, process.env.JWT_SECRET);
			req.userId = decodedData?.id;
		} else {
			decodedData = jwt.decode(token);
			rew.userId = decodedData?.sub;
		}
		next();
	} catch (error) {
		console.log(error);
	}
};
const protect = asyncHandler(async (req, res, next) => {
	let token;

	if (
		req.headers.authorization &&
		req.headers.authorization.startsWith("Bearer")
	) {
		try {
			token = req.headers.authorization.split(" ")[1];

			const decoded = jwt.verify(token, process.env.JWT_SECRET);

			req.user = await User.findById(decoded.id).select("-password");

			next();
		} catch (error) {
			console.error(error);
			res.status(401);
			throw new Error("Not authorized, token failed");
		}
	}

	if (!token) {
		res.status(401);
		throw new Error("Not authorized, no token");
	}
});
module.exports = auth;
module.exports = protect;
