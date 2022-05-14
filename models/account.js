const mongoose=require('mongoose')
const Schema=mongoose.Schema;
const account=new Schema({
    user:String,
    pass: String
});

const AccountModel=mongoose.model('account',account)

module.exports=AccountModel