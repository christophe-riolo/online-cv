var app = angular.module("cv");

app.controller("cv-description", function($scope) {
    $scope.item = $scope.description;
    $scope.setClass = function(type, depth) {
        switch(type) {
            case "container": switch(depth) {
                case 0: return "";
                default: return "w3-container";
            };
            case "label": switch(depth) {
                case 0: return "w3-large w3-center";
                default: return "w3-medium w3-center";
            };
            case "details" : return "w3-left-margin";
        };
    };
  
  // To decide whether the details should be hidden
  $scope.isMinimized = function (minimized,depth) {
    return minimized;
  };
});
