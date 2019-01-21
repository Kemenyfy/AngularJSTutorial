app.controller('MainController', function ($scope, $http) {

    var onUserComplete = function (response) {
        $scope.user = response.data;

    };

    var onError = function (reason) {
        $scope.error = "Could not fetch the user";
    };

    $http.get("https://api.github.com/users/ambethia")
        .then(onUserComplete, onError);

    $scope.Message = "Hello, Angular";

});