import express from "express"
const app = express();
require('dotenv').config()
console.log(process.env) 

/*
( async () => {
    try{
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
        app.on("error",() => {
            console.log("ERRR: ",error);
            throw err
        })
        app.listen(process.env.PORT, () => {
            console.log(`App is listening on port ${process.env.PORT}`);
        })
    }catch(error) {
        console.log('ERROR: ', error)
        throw err
    }
})
*/