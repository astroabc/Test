const mongoose = require("mongoose");
const url = `mongodb+srv://holigan:6m7vkNXQ3EV5T7Pi@todoapp.fxaeffp.mongodb.net/Example?retryWrites=true&w=majority`;

const connectUserDB = async () => {
  try {
    await mongoose.connect(url, {
      ssl: true,
    });
    console.log("Server connected successfully to database");
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = { connectUserDB };
