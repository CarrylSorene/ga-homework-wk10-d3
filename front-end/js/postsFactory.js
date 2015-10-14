angular.module('postsApp')

.factory('JsonFactory', function($http, $q) {
  var PostsFactory = {
    getPostTitles: function() {
      var deferred = $q.defer();

      $http
        .get('http://jsonplaceholder.typicode.com/posts/')
        .success(function(response) {
          deferred.resolve(response);
        })
        .error(function(error) {
          deferred.reject(error);
        })

        return deferred.promise;
    }
   
  }

  return PostsFactory;
});