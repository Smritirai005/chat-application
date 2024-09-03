const express = require("express");
const {
  registerUser,
  authUser,
  allUsers,
} = require("../controllers/userController");
const { protect } = require("../middleware/authMiddleware");

console.log("registerUser:", typeof registerUser); // Should be "function"
console.log("authUser:", typeof authUser); // Should be "function"
console.log("allUsers:", typeof allUsers); // Should be "function"


const router = express.Router();
console.log("Setting up user routes");


router.route("/").get(protect, allUsers);
router.route("/").post(registerUser);
router.route("/login").post(authUser);

module.exports = router;