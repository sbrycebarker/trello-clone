angular.module('Trello')

.controller('MainController', function ($scope, service, $http) {

var getData = function() {

  service.getAllData()
    .then(function (response) {
      $scope.lists = response.data;
      console.log($scope.lists)
    })
    .catch(function (err) {
      console.log(err)
    })
};
getData();

  $scope.addTask= function (addTask, $index) {
      console.log(addTask)
    $http.post('/api/task',{task:addTask, $index: $index})
    .then(function(response) {
      console.log(response);
        getData();
    })


  }

  // $http.get('/hello-world')
  //   .then(function (response) {
  //     console.log(response);
  //   });
    //
    // var newTask = {
    //   text: 'Do laundry'
    // }
    //
    // $http.post('/api/task', newTask)
    //   .then(function (response) {
    //     console.log(response)
    //   });

});
