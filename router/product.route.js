const express = require ('express');
const router = express.Router();
var controller = require("../controller/product.controller")





router.get('/api/:product_id', controller.getProductId)

router.post("/add",controller.postProduct);


module.exports = router;