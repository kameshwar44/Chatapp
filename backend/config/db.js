const mongoose = require("mongoose");
const PATH = "mongodb+srv://manub9864:wxlrzfVFKLjUKlRz@cluster0.s1jpdpx.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";


const connectMongoDB = async () => {
  try {
    await mongoose.connect(PATH);
    console.log("connect mongodb");
  } catch (error) {
    console.log(error);
  }
};

module.exports = connectMongoDB;
