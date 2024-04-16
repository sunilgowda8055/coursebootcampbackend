const mongodb=require("mongoose");// import mongodb through require.
const dotenv=require("dotenv");// import dotenv.
const { default: mongoose } = require("mongoose");
dotenv.config(); // after import dotenv we did config that.

 const LINK = process.env.MONGODBLINK;// i stored mongodblink present in .env file to link variable to process that link.


// write the function if database connected it will show one console if database not connected it will show one console and mongoose,connect is predefinned method for that we connected link stored in .env


 async function connectDatabase(){
try{
await mongoose.connect(LINK);
console.log("Connected to Database")
}
catch(error){

  console.log(error);
  console.error("Could not connect to the database")
}
 }

module.exports=connectDatabase;

