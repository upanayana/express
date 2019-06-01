const moment = require('moment');

const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://root:root123@cluster0-jccxt.mongodb.net/gearup-sportz?retryWrites=true&w=majority";


module.exports = (req, res) => {
  const client = new MongoClient(uri, { useNewUrlParser: true });
  client.connect(err => {
    if(!err) {
      const collection = client.db("gearup-sportz").collection("users");
      
      collection.findOne({name: 'GearupSportz'}, function (e, i){
        res.end(JSON.stringify(i));
      });

    } else {
      res.end( 'Err Connecting :(');
    }
    
  });

}