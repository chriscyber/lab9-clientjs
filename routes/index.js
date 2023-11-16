//Here you will require route files and export them as used in previous labs.
import palRoutes from "./palindromeCheck.js";

const constructorMethod = (app) => {
  //use 'use' when using middleware
  app.use("/", palRoutes);
  // app.use("/", (req, res) => {
  //   res.sendFile(path.resolve(__dirname, "static/homepage.html"));
  // });
  app.use("*", (req, res) => {
    res.redirect("/static/homepage");
    //res.status(404).json({ error: "Rounte not found" });
  });
};

export default constructorMethod;
