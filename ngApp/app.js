var app = angular.module("myApp", ["ui.router"]);

//controllers
app.controller("Home", HomeController).controller("MasterList", MasterListController);

//services
app.service("$masterListService", MasterListService);

//states
app.config(function($stateProvider, $httpProvider, $urlRouterProvider, $locationProvider) {
  $stateProvider
  .state("home", {
      url: "/",
      templateUrl: "/ngApp/views/home.html",
      controller: HomeController,
      controllerAs: "vm"
  })
  .state("master-list", {
    url: "/master-list/:id",
    templateUrl: "/ngApp/views/master-list.html",
    controller: MasterListController,
    controllerAs: "vm"
  });
  $urlRouterProvider.otherwise("/");
  $locationProvider.html5Mode(true);

});