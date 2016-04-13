app.controller("PostDetailsController", function($scope, UserFactory, MessageFactory, $location, $routeParams){
  $scope.currentUser = UserFactory.getCurrentUser();
  if(!$scope.currentUser){
    $location.path('/');
  }
  console.log($routeParams);

  MessageFactory.getJustOne($routeParams.id, function(response){
    $scope.message = response.data;
    console.log(response);
  })

  $scope.postComment = function(comment, message){
    console.log(comment);
    comment.user = $scope.currentUser;
    MessageFactory.createComment(comment, message._id, function(){

      MessageFactory.getJustOne($routeParams.id, function(response){
        $scope.message = response.data;
        console.log(response);
      })
    })
  }
})

app.controller("UsersController", function($scope, UserFactory, $location){
  $scope.currentUser = UserFactory.getCurrentUser();

  if($scope.currentUser){
    $location.path('/messages');
  }

  $scope.loginUser = function(user){
    // console.log(user)
    UserFactory.login(user, function(data){
      $location.path('/messages');
    })
  }

})

app.controller("WallController", function($scope, UserFactory, MessageFactory, $location){
  $scope.currentUser = UserFactory.getCurrentUser();
  if(!$scope.currentUser){
    $location.path('/');
  }

  function getMessages(){
    MessageFactory.index(function(data){
      $scope.messages = data;
    })
  }

  getMessages();

  $scope.logout = function(){
    UserFactory.logout(function(){
      console.log("in logout callback");
      $location.path('/');
    })
  }

  $scope.postMessage = function(message){
    message.user = $scope.currentUser;
    MessageFactory.create(message, function(){
      $scope.newMessage = {};
      getMessages();

    })
  }

  $scope.postComment = function(comment, message){
    console.log(comment);
    comment.user = $scope.currentUser;
    MessageFactory.createComment(comment, message._id, function(){
      getMessages();

    })
  }

})
