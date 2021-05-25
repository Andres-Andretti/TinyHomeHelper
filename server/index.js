const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();

const postRoutes = require("./routes/route.posts");
const userRoutes = require("./routes/userRoutes");
// const authUser = require("./controllers/userController");
app.use(express.json());

app.use(cors());
app.use("/posts", postRoutes);
app.use('/user', userRoutes);
app.use(express.urlencoded({ extended: false }));

const Photo = require("./schemas/photoGallery");
const Photogallery = require("./schemas/photoGallery");

// const photoGallery = require('./routes/photoGallery');
// app.use('/photos', photoGallery)

const CONNECTION_URL = process.env.CONNECTION_URL;
const PORT = process.env.PORT || 8080;

mongoose.connect(
	"mongodb+srv://capstone:capstone@cluster0.jlwry.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
	{
		useNewUrlParser: true,
		useUnifiedTopology: true,
	},
	(error) => {
		if (!error) {
			console.log("Successfully connected to MongoDB Database");
		} else {
			console.log(error);
		}
	}
);

mongoose.set("useFindAndModify", false);

app.post("/savePhoto", (req, res) => {
	const imageFile = req.body.imageFile;
	const username = req.body.username;

	console.log(req.body);

	let photoGallery = new Photo({
		image: imageFile,
		username: username.username,
	});

	photoGallery.save((error) => {
		if (error) {
			res.json({ error: "Unable to save photo" });
		} else {
			res.json({ success: true, message: "Photo Added" });
		}
	});
});
app.get("/displayPhotos", (req, res) => {
	Photo.find({}, (error, photo) => {
		if (error) {
			res.json({ error: "Unable to fetch photos" });
		} else {
			res.json(photo);
		}
	});
});

app.listen(PORT, () => {
	console.log("Server is running");
});
