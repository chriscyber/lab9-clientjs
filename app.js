/*
Here is where you'll set up your server as shown in lecture code and worked in previous labs.
Your server this week should not be doing any of the processing! Your server only exists to allow someone to get to the HTML Page and download the associated assets to run the palindrome checker.
You do not have to use handlebars for this since everything will be done client side. Your server is JUST to serve the static html file and all processing will be done using client side JavaScript
*/
import express from "express";
const app = express();
import configRoutes from "./routes/index.js";
const PORT = process.env.PORT || 3000;

import { fileURLToPath } from "url";
import { dirname } from "path"; //nodejs module for paths
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
//set public folder as static folder.
const staticDir = express.static(__dirname + "/public");

//init middleware
app.use("/public", staticDir);
// import path from "path";
// app.use(express.static(path.join(__dirname, "public")));
// app.use(express.json()); //body parser - do not need since data staying on client
// app.use(express.urlencoded({ extended: true })); //form submissions - do not need since form data not submitted to server

configRoutes(app);

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
