const data = require("./member_data");
const member = require("./member");
const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/libmanager_production", {
  useNewUrlParser: true
});
let db = mongoose.connection;
db.once("open", function() {
  console.log("Connected to local Database");
});

let count = 0;

for (let i = 0; i < data.length; i++) {
  let obj = new member(data[i]);
  console.log(count++);
  obj.save();
}
