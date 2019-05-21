const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Create Temperature Schema
const temperatureLogSchema = new Schema ({
  temperature:{
    type: Number,
    required: true
  },
  date:{
    type: String,
    required:true
  },
  logid:{
    type: String,
    required:true
  }
});

module.exports = Log = mongoose.model('log',temperatureLogSchema);
