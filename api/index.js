const express = require("express");
const { user, videos } = require("./fakeData");
const app = express();
const cors = require("cors");
app.use(express.json());
app.use(cors());

app.get("/api/user/1", (req, res) => {
	setTimeout(() => {
		res.json(user);
	}, 3000);
});

app.get("/api/videos/1", (req, res) => {
	setTimeout(() => {
		res.json(videos);
	}, 5000);
});

app.listen(8800, () => {
	console.log("Backend server is running ;)");
});
