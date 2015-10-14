angular.module('postsApp')

.factory('PostsFactory', function($http, $q) {
  var PostsFactory = {
    getPosts: function() {
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