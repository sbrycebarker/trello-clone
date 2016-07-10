angular.module('Trello')

  .factory('service', function($http) {

    var service = {}

      service.getAllData = function() {
        return $http.get('/api/data');

      };


  return service;
});
