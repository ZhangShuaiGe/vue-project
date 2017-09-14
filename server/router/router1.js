/**
 * Created by z on 2017/8/30.
 */
var express = require("express");
var router = express.Router();

router.get("*",function (req,res,next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild');
    res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
    if (req.method == 'OPTIONS') {
      res.send(200);
      /*让options请求快速返回*/
    } else {
      next();
    }
});

router.get("/a",function (req,res) {
  res.send("123456");
});

module.exports =  router;
