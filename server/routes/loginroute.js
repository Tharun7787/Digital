const express=require("express")
const logincontrol=require("../controllers/auth")
const router=express.Router();

router.post("/login",logincontrol.login)
router.post("/register",logincontrol.register)

module.exports=router;