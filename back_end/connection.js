const {MongoClient} = require('mongodb');
const url = "mongodb://127.0.0.1/myDB";
let client ={};
try{
    client = new MongoClient(url);
    console.log('DB connected');
}
catch(err){
    console.log(err);
    console.log('error happens to connect database')
}
module.exports = client