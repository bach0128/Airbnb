const express = require("express");
const router = express.Router();
const authController = require("../../controller/auth.controller");
const passport = require("passport");

// router.get("/login", authController.index);

router.post("/login", authController.login);

// router.post(
//   "/login",
//   //   middleware
//   passport.authenticate("local", {
//     failureRedirect: "/auth/login",
//     failureFlash: true,
//     badRequestMessage: "Vui lòng nhập email và password",
//     successRedirect: "/",
//   })
// );

module.exports = router;
