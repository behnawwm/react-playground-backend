import mongoose from "mongoose";
import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import formRouter from "./routes/info.js";
import config from "dotenv";

const app = express();
const port = process.env.PORT || 4000;

app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(cors());
config.config();
app.use("/", formRouter);

const CONNECTION_URL =
  process.env.CONNECTION_URL ||
  "mongodb+srv://behnam:behnam@books.y6oipnt.mongodb.net/?retryWrites=true&w=majority";
mongoose
  .connect(CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() =>
    app.listen(port, () => {
      console.log(`Example app listening on port ${port}`);
    })
  )
  .catch((error) => console.log(error.message));
