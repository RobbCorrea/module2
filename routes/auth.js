const express = require("express");
const router = express.Router();
const { toProfile } = require("../config/middlewareAuth");
const authcontrollers = require("../controllers/authcontrollers");

router.get("/signup", (req, res) => {
  res.render("register", { title: "SignUp" });
});

  router.post("/signup", authcontrollers.signup);

router.get("/login", (req, res ) => {
  res.render("login", { title: "Login" });
});

router.post("/login", authcontrollers.login);

router.get("/logout", (req, res) => {
  req.logout();
  res.redirect("/login");
});

module.exports = router;