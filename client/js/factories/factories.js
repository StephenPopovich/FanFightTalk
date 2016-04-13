app.factory("UserFactory", function($http){

      var currentUser = null;

      return {

        getCurrentUser: function(){
          return currentUser;
        },

        logout: function(callback){
          currentUser = null;
          callback();
        },

        login: function(user, callback){
          $http.post('/users', user).then(function(response){
            currentUser = response.data;
            callback();
          });
        }

      };
    })

app.factory("MessageFactory", function($http){
      return {
        getJustOne: function(id, callback){
          $http.get('/messages/' + id).then(callback);
        },
        index: function(callback){
          $http.get('/messages').then(function(response){
            callback(response.data);
          })
        },
        create: function(message, callback){
          $http.post('/messages', message).then(callback);
        },
        createComment: function(comment, id, callback){
          $http.post('/messages/'+id, comment).then(callback);
        }
      }
    })
