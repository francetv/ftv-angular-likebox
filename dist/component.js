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

angular.module("ftv.components.likeBox.templates", []).run(["$templateCache", function($templateCache) {$templateCache.put("/likeBox/dislike.svg.html","<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 31 31\"><path fill=\"none\" stroke=\"#828282\" stroke-miterlimit=\"10\" d=\"M30.5 25.8c0 2.5-2 4.6-4.6 4.6H5.2c-2.5 0-4.6-2-4.6-4.6V5.2C.6 2.7 2.6.6 5.2.6h20.7c2.5 0 4.6 2 4.6 4.6v20.6z\" class=\"back\"/><g fill=\"#828282\"><circle cx=\"8\" cy=\"9.9\" r=\"1.9\"/><circle cx=\"23.1\" cy=\"9.9\" r=\"1.9\"/></g><path fill=\"none\" stroke=\"#828282\" stroke-miterlimit=\"10\" d=\"M7 23.7c0-9 16.9-8.9 16.9 0\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/></svg>");
$templateCache.put("/likeBox/index.html","<div class=\"likeBox\"><button class=\"likeBox__like likeBox__button\" ng-click=\"like()\" ng-class=\"{ \'likeBox__button--active\': isLiked()}\"><div ng-include=\"\'/likeBox/like.svg.html\'\"></div></button> <button class=\"likeBox__dislike likeBox__button\" ng-click=\"dislike()\" ng-class=\"{ \'likeBox__button--active\': isDisliked()}\"><div ng-include=\"\'/likeBox/dislike.svg.html\'\"></div></button> <span class=\"likeBox__text\">Do you like ?</span></div>");
$templateCache.put("/likeBox/like.svg.html","<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 31 31\"><path fill=\"none\" stroke=\"#828282\" stroke-miterlimit=\"10\" d=\"M30.5 25.8c0 2.5-2 4.6-4.6 4.6H5.2c-2.5 0-4.6-2-4.6-4.6V5.2C.6 2.7 2.6.6 5.2.6h20.7c2.5 0 4.6 2 4.6 4.6v20.6z\" class=\"back\"/><g fill=\"#828282\"><circle cx=\"8\" cy=\"9.9\" r=\"1.9\"/><circle cx=\"23.1\" cy=\"9.9\" r=\"1.9\"/></g><path fill=\"none\" stroke=\"#828282\" stroke-miterlimit=\"10\" d=\"M7 16.9c0 9 16.9 8.9 16.9 0\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/></svg>");}]);