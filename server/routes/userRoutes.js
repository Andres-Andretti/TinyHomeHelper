const express = require("express");
const { authUser, registerUser } = require("../controllers/userController.js");
const protect = require("../middleware/authMiddleware.js");

const router = express.Router();

router.post('/login', authUser);
router.post('/registration', registerUser);



module.exports = router;
