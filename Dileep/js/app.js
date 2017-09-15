var module = angular.module("netflix",[]);
module.controller('NetFlixController',function($scope,DataService){
		$scope.myList = DataService.mockData["mylist"];
		$scope.recommendations = DataService.mockData["recommendations"];
		DataService.clearEditing($scope.myList,$scope.recommendations);
		$scope.removeFromMyList = function(index){
			var item = $scope.myList.splice(index,1);
			$scope.recommendations.push(item);
		};
		$scope.addToMyList = function(index){
			$scope.myList.push($scope.recommendations[index]);
			$scope.recommendations.splice(index,1);
		};
		$scope.func1 = function(title){
			document.getElementById(title).style.display = "block";
		}
		$scope.func2 = function(title){
			document.getElementById(title).style.display = "none";
		}
		$scope.editTitle = function(list){
			list.editable = true;
		}
		$scope.doneEditing = function(list){
			list.editable = false;
		}
		$scope.clearEditing = function(){
			DataService.clearEditing($scope.myList,$scope.recommendations);
		}
});


module.factory('DataService',function(){
	var mockData = {
				   		"mylist":[
					      {
					         "title":"Futurama",
					         "id":1,
					         "img":"http://cdn1.nflximg.net/webp/7621/3787621.webp"
					      },
					      {
					         "title":"The Interview",
					         "id":2,
					         "img":"http://cdn1.nflximg.net/webp/1381/11971381.webp"
					      },
					      {
					         "title":"Gilmore Girls",
					         "id":3,
					         "img":"http://cdn1.nflximg.net/webp/7451/11317451.webp"
					      }
					   ],
					   "recommendations":[
					      {
					         "title":"Family Guy",
					         "id":4,
					         "img":"http://cdn5.nflximg.net/webp/5815/2515815.webp"
					      },
					      {
					         "title":"The Croods",
					         "id":5,
					         "img":"http://cdn3.nflximg.net/webp/2353/3862353.webp"
					      },
					      {
					         "title":"Friends",
					         "id":6,
					         "img":"http://cdn0.nflximg.net/webp/3200/9163200.webp"
					      }
					   ]
					};
	function clearEditing(myList,recommendations){
		for(var i = 0;i<myList.length;i++){
			myList[i]["editable"] = false;
		}
		console.log(myList);
		for(var i = 0;i<recommendations.length;i++){
			recommendations[i]["editable"] = false;
		}
	}
	return {
		mockData : mockData,
		clearEditing : clearEditing
	};
});
