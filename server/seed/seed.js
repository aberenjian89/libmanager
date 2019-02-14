const member_data = require("./member/member_data");
const admin_data = require("./admin/admin_data");
const admin = require("./admin/admin");
const member = require("./member/member");
const mongoose = require("mongoose");

console.log("Connecting To Database");
mongoose.connect("mongodb://localhost/libmanager_production", {
  useNewUrlParser: true
});
let db = mongoose.connection;

async function dropDatabase() {
  await db.dropDatabase("libmanager_production", err => {
    if (err) {
      console.log(err);
    }
  });
}

async function seed() {
  let admins_ids = [];
  console.log("Seeding Admins");
  for (let i = 0; i < admin_data.length; i++) {
    let obj = new admin(admin_data[i]);
    await obj.save();
    admins_ids.push(obj._id);
  }
  console.log("Seeding Members");
  for (let i = 0; i < member_data.length; i++) {
    let obj = new member(member_data[i]);
    obj.agent_id = admins_ids[Math.floor(Math.random() * admins_ids.length)];
    await obj.save();
  }

  db.close();
}

dropDatabase();
seed();
