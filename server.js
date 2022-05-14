const express = require('express')
const app = express()
var router=require('./apiRouter.js');
const bodyParser=require('body-parser')
const mongoose=require('mongoose')
const Account=require('./models/account.js')
const port = 3000

mongoose.connect('mongodb://localhost/nodemyDB',{
    useNewUrlParser:true,
    useUnifiedTopology:true
})

app.use(bodyParser.urlencoded({
    extended:false
}))

app.use(bodyParser.json())

app.post('/register',(req,res)=>{
    console.log(req.body.username,req.body.password)
    Account.create({
        user:req.body.username,
        pass: req.body.password
    })
    .then(data=>{
        res.json("da them thanh cong")
    })
    .catch(err=>{
        console.log(err)
        res.status(500).json("that bai")
    })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})