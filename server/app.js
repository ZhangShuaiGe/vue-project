/**
 * Created by z on 2017/8/30.
 */
var app = require("express")();
var router1 = require("./router/router1");
app.use("/index",router1);

app.listen(8081);
