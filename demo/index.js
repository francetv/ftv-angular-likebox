angular.module('demoApp', ['ftv.component.likeBox']);
angular.module('demoApp').controller('DemoController', ['$scope', '$rootScope', function($scope, $rootScope) {
    $scope.currentState = {
        isLiked: false,
        isDisliked: false
    }

    $rootScope.$on('ftv-likebox-update', function(event, data) {
        console.log(data);
        alert('ftv-likebox-update event is triggered');
        $scope.currentState = data;
    })
}]);
