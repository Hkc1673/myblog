import express from "express";
import dotenv from "dotenv"
import bodyParser from "body-parser";
import mongoose from "mongoose";

const app = express();
dotenv.config();

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));

const PORT = process.env.PORT || 5001
app.listen( PORT, () => console.log(`Server running on ${PORT}`))

mongoose.connect(process.env.CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(()=> {
    console.log("Connect to DB")
})
.catch((error) => {
    console.log(error.message)
})

mongoose.set("useFindAndModify", false);