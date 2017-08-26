var app = angular.module("cv");

app.controller("cv-list", function($scope) {
    $scope.depth = 0;
    $scope.item = $scope.cv;
    $scope.setClass = function(type, depth) {
        switch(type) {
            case "container": switch(depth) {
                case 0: return "";
                case 1: return "w3-card w3-container w3-margin";
                case 2: return "w3-container w3-margin";
                default: return "w3-container";
            };
            case "label": switch(depth) {
                case 0: return "w3-jumbo w3-center";
                case 1: return "w3-xxlarge w3-center";
                case 2: return "w3-large w3-left-align";
                default: return "w3-medium w3-left-align";
            };
            case "details" : return "w3-left-margin";
        };
    };
    $scope.isMinimized = function (minimized,depth) {
        return minimized && depth > 0 && depth < 3;
    };
});
