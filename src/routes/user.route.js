const { Router } = require('express');
const { userController } = require('../controllers');
const router = Router();

router.get("/", userController.getUser);
router.get("/:id", userController.getUserById);
router.post("/", userController.createUser);
router.delete("/:id", userController.deleteById)

module.exports = router;
