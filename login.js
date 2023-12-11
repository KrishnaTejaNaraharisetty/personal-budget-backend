const mongoose=require('mongoose')
const loginModel=require('./models/loginModel')
mongoose.connect(url,{useNewUrlParser:true,useUnifiedTopology:true})
        .then(()=>{
            console.log("Connected to Db")
            let newdata=new loginModel({id:100,Name:"Rahul inserted by mongoose"})
            loginModel.insertMany(newdata)
                        .then((data)=>{
                            console.log(data)
                            mongoose.connection.close()
                        })
                        .catch((conerr)=>{
                            console.log(conerr)
                        })      
        })
        .catch((conerr)=>{
            console.log(conerr)
        })