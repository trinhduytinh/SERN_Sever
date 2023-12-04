import express from "express";
import bodyParser from "body-parser";
import viewEngine from "./config/viewEngine";
import initWebRoutes from "./route/web";
import connectDB from "./config/connectDB";
import cors from "cors";

require("dotenv").config();

let app = express();
// app.use(cors({ credentials: true ,origin: '*' }));
// Add headers before the routes are defined
// app.use(
//   cors({credentials: true, origin: ['http://localhost:80', 'http://14.236.21.159:80', '*']})
// );
//config app
app.use(cors({ credentials: true, origin: 'http://localhost:3000' }));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

viewEngine(app);
initWebRoutes(app);

connectDB();

let port = process.env.port || 6969;
//Port == undefined => port = 6969

app.listen(port, () => {
  //callback
  console.log("Backend Nodejs is runing on the port: " + port);
});
