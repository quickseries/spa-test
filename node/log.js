var db=require('./db')
module.exports=db.model('Log',{
    we1:{type:String,required:true}
})