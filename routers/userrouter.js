const Router = require("express");
const userController = require("../controllers/UserController");
const auth_middlware = require("../middlware/authMiddlware");

const router = new Router();

router.post("/register", userController.register);
router.post("/login", userController.login);
router.get("/auth", auth_middlware, userController.check_auth);

module.exports = router;
