const Log = require('../models/Log');
const _ = require('lodash');

/**
 * get all temperature logs
 * @returns {Promise} 
 */
function getAllTemperatureLogs(){
  return new Promise( (resolve,reject)=>{
    const data = []
    Log.find({}, (err,temperatureLogs)=>{
      if(err) reject({"msg":"err in getting all temp logs"})
      _.each(temperatureLogs, (temperatureLog)=>{
          data.push({
            "date": temperatureLog.date,
            "temperature":temperatureLog.temperature,
            "logid":temperatureLog.logid
          })
      })
      resolve(data)
    })
  })
}

/**
 * create Temperature in Log table mlab
 * @param {Number} temperature
 * @param {Number} date
 * @param {String} logid
 * @returns {Promise}
 */
function createTemperatureMlab(temperature,date,logid){
    return new Promise( (resolve,reject)=>{
        const newTemperatureLog  = new Log({
            temperature: temperature,
            date: date,
            logid:logid
            });
            newTemperatureLog
              .save()
              .then( temperatureLog => {
                console.log(temperatureLog);
                resolve({
                        "date":temperatureLog.date,
                        "temperature":temperatureLog.temperature,
                        "logid":temperatureLog.logid
                      })
              }).catch( err =>{
                console.log("err in saving " + err);
                reject(`err in saving temperature to log database`);
              });
    })
}

/**
 * delete temperature from log table mlab 
 * @param {String} logid
 * @returns {Promise}
 */
function deleteTemperatureEntry(logid){
    return new Promise( (resolve,reject)=>{
        Log.findOneAndDelete({ logid:logid},  (err,temperatureLog) =>{
            if (err) reject({"msg":"err in deletion"})
            resolve({
              "date":temperatureLog.date,
              "temperature":temperatureLog.temperature,
              "logid":temperatureLog.logid
            })
          });
    })
}

module.exports = {
    getAllTemperatureLogs,
    createTemperatureMlab,
    deleteTemperatureEntry
}