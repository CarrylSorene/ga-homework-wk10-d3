angular.module('postsApp')

.controller('PostsController', function(JsonFactory) {
  var self = this;

  JsonFactory.getPostTitles()
    .then(function(response) {
      self.postTitles = response;
      console.log(response)
    });

});