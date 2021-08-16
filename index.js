const express=require("express")
const app=express()
const customer=require("./routes/customer")
const port=process.env.port || 8080

app.use("/customer/",customer)

app.get("/",(req,res)=>{
    res.status(200).send(`Welcome to the home page`)
})

app.all("*",(req,res)=>{
    res.status(400).send(`The requested resource is not available at url ${req.url}`)
})

app.listen(port,()=>{
    console.log(`The serve is listening at port ${port}`)
})