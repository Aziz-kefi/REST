let mongoose = require('mongoose');



const dotenv = require("dotenv");
dotenv.config({path:'./config/.env'})




const DB = async () => {
  try {
    mongoose.connect(
      process.env.MONGO_URI,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      },
      () => console.log("Database connection successful")
    );
  } catch (error) {
    console.log(error);
  }
};



module.exports = DB;