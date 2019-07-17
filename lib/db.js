const mongoose = require('mongoose')
console.log(process.env.DB)
mongoose.connect(process.env.DB,{useNewUrlParser:true})