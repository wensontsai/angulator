var myApp = angular.module('Angulator', []);

////////
//config
////////
myApp.config(['$routeProvider', function($routeProvider){

  //routes
  $routeProvider
  .when('/', {
    templateUrl: 'views/lists.html',
    controller: 'ListCtrl'
  })
  // .when('/add-user', {
  //   templateUrl: 'views/add-new.html',
  //   controller: 'AddCtrl'
  // })
  //default route
  .otherwise('/', {
    redirectTo: '/'
  });

}]);


///////////
//controllers
//////////
myApp.controller('ListCtrl', ['$scope', '$http' ,function ($scope, $http) {

  $scope.loadData();
  // get list of users as succes function
  // set $scope.data to data

  $scope.loadData = function(){
    $http({
      method: "GET",
      url: 'users.php'
    })
    .success(function (data, status, headers, config){
      $scope.yes = "load is success bro";
      $scope.users = data;
      console.log(data);
      console.log($scope.yes);
    })
    .error(function (data, status, headers, config){
      // something went wrong
    });
  };

  $scope.add_new = function(user, AddNewForm){
      console.log(user);
      console.log(user.username);

      $http({
        url: 'add_user.php',
        method: "POST",
        headers: {'Content-Type': 'application/x-www-form-urlencoded'},
        data: $.param({username : user.username,
               first_name : user.first_name,
               last_name : user.last_name,
               address : user.address
              })
      })
      .success(function (data, status, headers, config){
        $scope.reset();
        // $scope.activePath = $location.path('/');
        console.log(data);
      })
      .error(function (data, status, headers, config){
        // something went wrong
      });


      /// why need this???
      $scope.reset = function(){
        $scope.user = angular.copy($scope.master);
      };

      $scope.reset();

      $scope.loadData();
  };

  $scope.delete_record = function(id){
    $http({
      url: 'delete_user.php',
      method: "POST",
      headers: {'Content-Type': 'application/x-www-form-urlencoded'},
      data: $.param({id : id})
    })
    .success(function (data, status, headers, config){
      $scope.yes = "delete is success bro";
      $scope.users = data;
      console.log(data);
      console.log($scope.yes);
    })
    .error(function (data, status, headers, config){
      // something went wrong
    });
  };


}]);


// myApp.controller('AddCtrl', ['$scope', '$http', '$location',function ($scope, $http, $location) {

//   $scope.master = {};
//   $scope.activePath = null;

//   // add new
//   $scope.add_new = function(user, AddNewForm){
//     console.log(user);
//     console.log(user.username);

//     $http({
//       url: 'add_user.php',
//       method: "POST",
//       headers: {'Content-Type': 'application/x-www-form-urlencoded'},
//       data: $.param({username : user.username,
//              first_name : user.first_name,
//              last_name : user.last_name,
//              address : user.address
//             })
//     })
//     .success(function (data, status, headers, config){
//       $scope.reset();
//       $scope.activePath = $location.path('/');
//       console.log(data);
//     })
//     .error(function (data, status, headers, config){
//       // something went wrong
//     });

//     $scope.reset = function(){
//       $scope.user = angular.copy($scope.master);
//     };

//     $scope.reset();
//   };

// }]);

