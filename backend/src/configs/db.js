// mongodb://localhost:27017/ksocial1
const mongoose = require("mongoose");
//const dotenv = require("dotenv");
//dotenv.config();

const connect = () => {
  //return mongoose.connect(process.env.MONGO_URI);
  return mongoose.connect('mongodb://localhost:27017/ksocial1');
};

module.exports = connect;

