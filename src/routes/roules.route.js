const { Router } = require('express');
const { rolController } = require ("../controllers")
const router = Router();

router.get("/", rolController.getRol);

module.exports = router;
