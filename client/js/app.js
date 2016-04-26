var app = angular.module('fullMeanWall', ['ngRoute'])
    .config(function($routeProvider){
      $routeProvider
      .when("/", {
        templateUrl: "/partials/login.html",
        controller: "UsersController"
      })
      .when('/messages', {
        templateUrl: "/partials/thewall.html",
        controller: "WallController"
      })
      .when('/posts/:id', {
        templateUrl: "/partials/show_post.html",
        controller: "PostDetailsController"
        })
      .when('/news', {
         templateUrl: './partials/news.html'

      })

      .when('/orders', {
         templateUrl: './partials/orders.html'

      })

      .when('/news2', {
         templateUrl: './partials/news2.html'

      })

      .when('/news3', {
         templateUrl: './partials/news3.html'

      })
      .when('/events', {
         templateUrl: './partials/events.html'

      })
      .when('/ufc', {
         templateUrl: './partials/ufc.html'

      })
      .when('/bellator', {
         templateUrl: './partials/bellator.html'

      })
      .when('/other', {
         templateUrl: './partials/other.html'

      })
      .when('/podcast', {
         templateUrl: './partials/podcast.html'
      })
      .when('/chatroom', {
         templateUrl: './partials/chatroom.html'
      })
      .when('/contact', {
         templateUrl: './partials/contact.html'
      })
      .when('/title_holders', {
         templateUrl: './partials/title_holders.html'
      })

      .otherwise('/')
    })
