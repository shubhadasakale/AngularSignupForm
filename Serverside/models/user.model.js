const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

var userSchema = new mongoose.Schema({
    fullName:{
        type: String
    },
    email:{
        type: String
    },
    password:{
      
        type:String
    },
    saltSecret: String
});



userSchema.pre('save',function(next){
    bcrypt.genSalt(10,(err,salt)=>{
        bcrypt.hash(this.password,salt,(err,hash)=>{
            this.password= hash;
            next();
        });
    });
});

mongoose.model('user',userSchema);
