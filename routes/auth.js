const router = require("express").Router();
const User = require("../models/User")
const bcrypt = require("bcrypt")


router.post("/registre", async(req,res)=>{
    const newUser = new Yser({
        username:req.body.username,
        email:req.body.email,
        password: hashedmdp
    })
    try {
        const salt = await bcrypt.genSalt(10);
        const hashedmdp = await bcrypt.hash(req.body.password , salt)
        const user = await newUser.save()
        res.status(200).json(user)
    } catch (error) {
        console.log("error:",err)
    }
})

router.post("/login",async(req,res)=>{
try {
    const user = await User.findOne({email:req.body.email})
    !user && res.status(404).json("user not found")
    const validMdp = await bcrypt.compare(req.body.password , user.password)
    !validMdp && res.status(400).json("wrong mpd")
    res.status(200).json(user)
} catch (error) {
    console.log(err)
}
})
module.exports = router