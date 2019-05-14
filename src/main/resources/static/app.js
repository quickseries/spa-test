angular.module('app', [])

angular.module('app')
   .controller('WeatherCtrl', function ($scope, $http) {	
	   $scope.logs = [];
	    
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
			$scope.median = 22;
		}
				
    	$scope.calAvg = function() {
    		console.log($scope.logs);    		
    	    var sum = 0.0;
    	    for (var i = 0; i < $scope.logs.length; i++) {
    	       sum = sum + $scope.logs[i];
    	    }
    	    console.log("Sum = " + sum); 
           // console.log('-----Avg----'+ sum/$scope.logs.length);
	         $scope.avg = (sum/$scope.logs.length).toFixed(2);
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
	        return $http.get('http://localhost:3333/logs')
	        .then(function (resp) {
	           	let logs = resp.data;
	           	
	           	//console.log(typeof logs);
	           	console.log(logs instanceof Array);
	            var sum = 0;
	            for (var i = 0; i< logs.length; i++){
	                 sum += parseFloat(logs[i]);
	            }
	            $scope.avg = (sum/logs.length).toFixed(2);;
	           	
	           	console.log( JSON.stringify(resp.data,null,2));
	        })
	      }
  	
})
