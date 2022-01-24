// require mongoose
const mongoose = require("mongoose");
//connect to DB
const connectDB = async () => {

    try {

        await mongoose.connect(process.env.MONGO_URI,
            console.log('Database is connected')



        )

    } catch (error) {

        console.error('Cannot connect to DataBase... ');

    }


    console.log("Database connected ....");
}

module.exports = connectDB;