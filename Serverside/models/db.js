const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI,{useNewUrlParser: true },(err)=>{
    if(!err)
    {
        console.log("Mongodb Connection suceess");
    }
    else{
        console.log("error ala re" + JSON.stringify(err,undefined,2));
    }
});


//mongoose.connect("")||MongoClient.connect("mongodb://localhost:27017/YourDB", { useNewUrlParser: true })

require('./user.model');