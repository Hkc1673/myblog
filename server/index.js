import express from "express";
import dotenv from "dotenv"
import bodyParser from "body-parser";
import {connectDB} from "./models/connectDB.js"

const app = express();
dotenv.config();

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));

const PORT = process.env.PORT || 5001
app.listen( PORT, () => console.log(`Server running on ${PORT}`))


// Connect to DB
connectDB();