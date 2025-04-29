const { Router } = require('express');
const router = Router();
const { userController } = require('../controllers');
const { userMiddleware } = require ("../middlewares")

router.get("/", userController.getUser);
router.get("/:id", userMiddleware.existsUser, userController.getUserById);
router.post("/", userController.createUser);
router.delete("/:id", userMiddleware.existsUser, userController.deleteById)

module.exports = router;
