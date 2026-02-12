import dotenv from 'dotenv';
import connectDB from './db/db.js';

dotenv.config();

connectDB().then(() => {
    app.listen(process.env.PORT || 8000, () => {
        console.log(`server is runing in ${process.env.PORT}`)
    })
}).catch((err) => {
    console.log("MONGO db connection failed !!!",err);
})