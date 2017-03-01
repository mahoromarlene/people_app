(function() {
  "use strict";

  angular.module("app").controller("peopleCtrl", function($scope) {
    $scope.people = [{
      name: "Marlene",
      bio: "Me",
      bioVisible: false
    },
    {
      name: "Jean Luc",
      bio: "Find the bio on Google",
      bioVisible: false
    },
    {
      name: "Joseph",
      bio: "Always sit in the same place",
      bioVisible: false
    }
    ];
  });

  $scope.bioVisible = function(person) {
      var index = $scope.people.indexOf(person);
      $scope.people[index].completed = true;
    }
})();