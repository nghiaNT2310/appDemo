const mongoose=require('mongoose')
mongoose.connect('mongodb://localhost:27017/nodemy',{
    useNewUrlParser: true,
    useUnifiedTopology:true
})

const Schema=mongoose.Schema
const customer=new Schema({
    name: String,
    age: String
})

const Customer=mongoose.model('customer',customer);

Customer.create({
    name: "lam",
    age: "18"
})

Customer.find({
    
})
.then(function(data){
    console.log(data)
})
.catch(function(err){
    console.log(err)
})