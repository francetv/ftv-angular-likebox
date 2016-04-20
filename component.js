angular.module('ftv.component.likeBox', ['ftv.components.likeBox.templates'])
    .directive('likeBox', ['$rootScope', function ($rootScope) {
        return {
            restrict: 'E',
            replace: true, // can be at replace true because it is in the view and like can be available during app loading
            templateUrl: '/likeBox/index.html',
            link: function($scope) {
                $scope.context = {
                    isLiked: false,
                    isDisliked: false
                };

                $scope.isLiked = function() {
                    return $scope.context.isLiked;
                };

                $scope.isDisliked = function() {
                    return $scope.context.isDisliked;
                };

                $scope.like = function () {
                    return $scope.action('like');
                };

                $scope.dislike = function () {
                    return $scope.action('dislike');
                };

                $scope.action = function (type) {
                    var isLiked = type === 'like';
                    $scope.context.isDisliked = !isLiked;
                    $scope.context.isLiked = isLiked;

                    $rootScope.$emit('ftv-likebox-update', $scope.context);
                };
            }
        };
    }]);
