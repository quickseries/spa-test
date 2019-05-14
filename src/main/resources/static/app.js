angular.module('app', [])

angular.module('app')
   .controller('WeatherCtrl', function (LogService, $scope, $http) {	
  	    $scope.logs = [];
  	    $scope.show=false;
		$scope.median = 0.0;
		$scope.avg = 0.0;
		$scope.high = 0.0;
		$scope.low = 0.0;
	     	
		$scope.add = function() {
			let tmp =  $scope.we1;
            console.log('-----add ---'+ $scope.we1);
            $scope.logs.push(1.0*tmp);
            console.log('-----add ---'+ $scope.logs);
        }

		$scope.calMedian = function() {
            console.log('-----median');
	    	LogService.getLogFromExpress()
	    	  .then(function (data) {
	    		let logs =   data.sort();
	  			$scope.median = logs[0];
	    	  } )
		}
				
    	$scope.calAvg = function() {
	    	LogService.getLogFromExpress()
	    	  .then(function (data) {
	    		  $scope.logs =   data.sort();
	  			  $scope.median = $scope.logs[0];
		          $scope.high = $scope.logs[0];
		          $scope.low = $scope.logs[$scope.logs.length-1];

	    		console.log($scope.logs);    		
	    	    var sum = 0.0;
	    	    for (var i = 0; i < $scope.logs.length; i++) {
	    	       sum = sum + $scope.logs[i];
	    	    }
	    	    console.log("Sum = " + sum); 
	           // console.log('-----Avg----'+ sum/$scope.logs.length);
		         $scope.avg = (sum/$scope.logs.length).toFixed(2);

	    	}) 
               
    	}
    	
	    $scope.calHigh = function() {
            console.log('-----high');
			$scope.high = 32;
	    }
	    $scope.calLow = function() {
            console.log('-----low');
			$scope.low = -18;
	    }
	    
	    $scope.getLogs = function () {
	    	LogService.getLogFromExpress()
	    	  .then(function (data) {	    	    
	           	let logs = data.sort();	           	
	           	console.log(logs instanceof Array);
	            var sum = 0;
	            for (var i = 0; i< logs.length; i++){
	                 sum += parseFloat(logs[i]);
	            }
	            $scope.avg = (sum/logs.length).toFixed(2);
	            $scope.high = data[0];
	            $scope.low = data[data.length-1];
	            $scope.median = data[data.length/2-1];
	            
	           	console.log( JSON.stringify(data.sort(),null,2));
	    	  })
	    }
	    
	    
	    $scope.insert = function() {
	    	console.log('----------------post');
	    	var saveData = {};
	    	saveData.we1= $scope.we1;
	    	
	        $http({
	          method: 'POST',
	          url: 'http://localhost:3333/save',
	          data: JSON.stringify(saveData)                   // '{"we1": 31}'

	        }).then(function success(resp) {
                      console.log(JSON.stringify(resp,null,2));
	        }, function error(err) {

	        });

	      };

		  $scope.showdb = function () {
			  $scope.show=!$scope.show;
			  console.log("--------------------showdb--------")
			  return $http.get('http://localhost:3333/showdb')
			    .then(function (resp) {
			       console.log(JSON.stringify(resp.data,null,2));
			       $scope.db = resp.data;
			    })
			  
		  };  
		  
		  $scope.deletelog = function () {
			  console.log("--------------------delete--------"+$scope.deleteid)
			  
			  var delData = {};
	    	  delData.id= $scope.deleteid;
	    	  
		return	 $http({
	          method: 'POST',
	          url: 'http://localhost:3333/dele',
	          data: JSON.stringify(delData)          

	        }).then(function success(resp) {
                      console.log(JSON.stringify(resp,null,2));
	        }, function error(err) {

	        });
			  
		  };  
	    
	    
		    
	    
	    
})

angular.module('app')
.service('LogService', function ($http) {
  this.getLogFromExpress = function () {
    return $http.get('http://localhost:3333/logs')
    .then(function (resp) {
      return resp.data
    })
  }
})

