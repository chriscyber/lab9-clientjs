/*
Require express and express router as shown in lecture code and worked in previous labs.
Your server this week should not be doing any of the processing! Your server only exists to allow someone to get to the HTML Page and download the associated assets to run the palindrome check page.

you just need one route to send the static homepage.html file
*/
import { Router } from "express";
const router = Router();
import path from "path";
//import { testPalindrome } from "../public/js/main.js";
//import main from "../public/js/main.js";

router.get("/", (req, res) => {
  res.sendFile(path.resolve("static/homepage.html"));
  //res.sendFile(path.resolve(__dirname, "../static/homepage.html"));
  //res.send(main.testPrime("should return this")); //this works
  //res.sendFile(path.join(__dirname, "public", "homepage.html"));
  //res.render("homepage", {}); //cant use res.render without template engine like handlebars.
});

router.post("/", (req, res) => {
  console.log("In server route for processing");

  res.sendFile(path.resolve("static/homepage.html"));
  let input = req.body;
  console.log("input: ", input);
  return input;
});

export default router;
