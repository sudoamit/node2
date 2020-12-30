const express = require('express');
const bodyParser = require('body-parser')
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

app.use("/",require("./router/user.route"))
app.use("/",require("./router/product.route"))
app.listen(8000);