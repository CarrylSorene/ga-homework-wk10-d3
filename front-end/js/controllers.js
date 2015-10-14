angular
  .module("postsApp")
  .controller("PostController", PostController);

PostController.$inject = ['$resource']
function PostController($resource) {
  var self = this;

  var Posts = $resource('http://jsonplaceholder.typicode.com/posts/:id', { id: '@_id' }, {
    'update': { method: 'PUT' }
  });

  self.posts = Post.query();

  this.selectPost = function(post, index) {
    self.activePostIndex = index;
    self.selectedPost = Post.get({ id: post._id });
  };

  this.newPost = {};

  this.savePost = function() {
    var post = new Post(self.newPost);
    post.$save(function() {
      self.posts.push(post);
      self.newPost = {};
    });

    Post.save(self.newPost, function(post) {
      self.posts.push(post);
      self.newPost = {};
    });
  }

  this.editPost = function(post) {
    self.selectedPost = post;
  }

  this.updatePost = function() {
    Post.update(self.selectedPost);
    self.selectedPost = {};
  }

  this.deletePost = function(post) {
    Post.delete({ id: post._id });
    var index = self.posts.indexOf(post);
    self.posts.splice(index, 1);
  }
}