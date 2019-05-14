var express = require('express'), bodyParser = require('body-parser');
var db=require('./db')
var morgan = require('morgan');
var Log = require('./log');
var app = express();

app.listen(3333,function(){	console.log("listening 3333")});
app.use(morgan('dev'));
app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8080');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});
app.use(bodyParser.json());
let logs=[];  // in memory

app.post('/dele', function(req,resp){	
    console.log("delete - POST method connected ...");	
    console.log(req.body.id);
    Log.remove({_id: req.body.id},
      function(err){
    	  console.log(err);
      }
    );
 	resp.status(200).send("ok");
});


app.post('/save', function(req,resp){	
    console.log("POST method connected ...");	
    console.log(req.body.we1);
    let weather = 1.0* req.body.we1;
    logs.push(weather);
    // ----------------------------------  save to mongodb
	var log = new Log({we1:req.body.we1});
    
	log.save(function(error){
		if(error){
			console.log(error);					
		}else{
			console.log("--------save to mongo db");		

		}
	});
    // ---------------------------------- 
    
 	resp.status(200).send(req.body);
});

app.get('/showdb', function(request,response){
	console.log('------------------------------express server show db called')
	
	Log.find().exec( function(error,data){
	    console.log(data)    	
	  	response.status(200).send(data);
	});
	
});


app.get('/logs', function(request,response){
    response.header("Access-Control-Allow-Origin", "*");
    response.header("Access-Control-Allow-Headers", "X-Requested-With");
    
	Log.find().exec( function(error,data){
	    var logs=[];
        for (var i = 0; i< data.length; i++){
             logs.push((1.0*data[i].we1));
        }
	    console.log(logs) ;
	    
	  	response.status(200).send(logs);
	});

//    var respBody = JSON.stringify(logs,null,'');
//	console.log(typeof logs);
//	console.log(logs instanceof Array);
//	console.log(Array.isArray(logs));
	
//	response.status(200).send(respBody);
       	 
});

