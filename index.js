import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import UserRoute from "./routes/UserRoute.js";
import bodyParser from "body-parser";
import HttpError from "./models/http-errors.js";
import MedicineRoute from "./routes/MedicineRoute.js";

const app = express();
mongoose.set("strictQuery", false);

const db = mongoose.connection;
db.on("error", (error) => console.log(error));
db.once("open", () => console.log("Database connected ..."));

app.use(cors());
app.use(bodyParser.json());

app.use(MedicineRoute);

app.use((req, res, next) => {
	res.setHeader("Access-Control-Allow-Origin", "*");
	res.setHeader("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
	res.setHeader(
		"Access-Control-Allow-Headers",
		"Origin, X-Requested-With, Content-Type, Accept, Authorization"
	);
	next();
});

app.use((req, res, next) => {
	const error = new HttpError("Could not find this route.", 404);
	throw error;
});

mongoose
	.connect("mongodb://127.0.0.1:27017/fullstack", {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	})
	.then(() => {
		app.listen(4000, () => console.log("Server connected to port 4000"));
	})
	.catch((err) => {
		console.log(err);
	});
