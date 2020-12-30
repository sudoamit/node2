const express = require ('express');
const router = express.Router();
var controller = require("../controller/user.controller")





router.get('/api/users',controller.getUsers);

router.post("/signup",controller.postUser);

module.exports = router;