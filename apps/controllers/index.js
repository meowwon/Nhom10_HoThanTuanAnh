var express = require("express");
var router = express.Router();
router.use("/home", require(__dirname + "/homecontroller"));
router.use("/product", require(__dirname + "/productcontroller"));
router.use("/services", require(__dirname + "/servicescontroller"));
router.use("/about", require(__dirname + "/aboutcontroller"));
router.use("/contact", require(__dirname + "/contactcontroller"));
router.use("/admin", require(__dirname + "/admin/admincontroller"));

router.get("/", function(req,res){
    res.render("index.ejs");
});
module.exports = router;
