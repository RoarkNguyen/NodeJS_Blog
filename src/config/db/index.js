const mongoose = require("mongoose");
async function connect() {
  try {
    await mongoose.connect("mongodb://localhost:27017/study-mongodb", {
      /// connect mongoose to mongodb
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      useCreateIndex: true,
    });
    console.log("connect successfully!");
  } catch (error) {
    console.log("Connect failure!");
  }
}
module.exports = { connect };
