const db = require("../models");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
var validator = require("validator");
const passport = require("passport");


exports.uploader =function(req,res){
    console.log(req.body,"req.body");
    req.send("end")
}
