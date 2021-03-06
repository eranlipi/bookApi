const mongoose = require('mongoose');
const config = require('config');
const db = config.get('mongoURI');

const connectDB = async() => {
try{
    await mongoose.connect(db, {
      useNewUrlParser: true,
      useCreateIndex: true
    });
    console.log("connected!")
  } catch(err){
  console.log(err.message);
  // Exit process with faliure
  process.exit(1);

} 

}
module.exports = connectDB;