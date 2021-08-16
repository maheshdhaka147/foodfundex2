const express=require("express")
const router=express.Router()


// Access it at /addfunds/dashboard
router.get("/dashboard",(req,res)=>{
    res.status(200).send(`Welcome to user dashboard`)
})

// Access it at /customer/addfunds
router.get("/addfunds",(req,res)=>{
    res.status(200).send('Welcome! You can add funds here')
})

module.exports=router