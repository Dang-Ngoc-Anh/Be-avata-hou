const express = require("express");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const cors = require("cors");
const { connection } = require("./src/connection/connection");
const FrameRouter = require("./src/routes/Frame.js");
const app = express();
dotenv.config();
const port = process.env.PORT || 3001;
app.use(cors());
connection();
app.use(bodyParser.json({ limit: "10mb" }));
app.use(bodyParser.urlencoded({ limit: "10mb", extended: true }));
app.use("/public/images", express.static("public/images"));
// router

app.use("/api/v1/frame", FrameRouter);
app.listen(port, () => {
  console.log("Start server runing port " + port);
});
