const Router = require("express");
const router = new Router();
const postController = require("../controllers/PostController");

router.post("/posts", postController.create);
router.get("/posts", postController.getAll);
router.get("/posts/:id", postController.getOne);
router.delete("/posts/:id", postController.delete);
router.put("/posts", postController.update);

module.exports = router;
