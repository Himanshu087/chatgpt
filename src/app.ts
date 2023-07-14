import dotenv from "dotenv";
import express from "express";
import { routes } from "./routes";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

// body-parser
app.use(bodyParser.json({ limit: "50mb", type: "application/json" }));
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));

dotenv.config();
app.use("/api", routes);

app.listen(port, () => {
  return console.log("Server Started at port: " + port);
});
