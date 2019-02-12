const mongoose = require('mongoose')
const seeder = require('mongoose-seed');

const data = require('./initdata.json')
const member = require('./member_model')

mongoose.connect('mongodb://localhost/libmanager_production',{useNewUrlParser: true},function(){
 seeder.seed(data,{dropDatabase: false, dropCollections: true}).then((dbdata)=>{
   console.log('preloading Test Data');
   console.log(dbdata)
 }).catch(err=>{
   console.log(err)
 })
})
