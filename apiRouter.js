const express=require('express')
var router=express.Router()

router.get('/',(req,res)=>{
    res.json("hello ")
})

router.get('/car',(req,res)=>{
    res.json("car ")
})

router.get('/:id',(req,res)=>{
    res.json(req.params.id)
})

module.exports=router