require ('dotenv').config()
const mongoose = require('mongoose')
const url = process.env.DATABASE_LINK

const connectDB = async() => {
    try {
        await mongoose.connect(url,{useNewUrlParser:true, useUnifiedTopology:true, useCreateIndex:true, useFindAndModify:false})
        console.log('Sucessfully connected to mongodb')
        
    } catch (err) {
        console.error(err.message)
        process.exit(1)
        
    }
}

module.exports = connectDB

