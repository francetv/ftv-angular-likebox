/**
 * The MIT License (MIT)
 *
 * Copyright (c) 2016 France Télévisions
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated
 * documentation files (the "Software"), to deal in the Software without restriction, including without limitation
 * the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and
 * to permit persons to whom the Software is furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all copies or substantial portions of
 * the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO
 * THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
 * TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

angular.module("ftv.components.likeBox.templates", []).run(["$templateCache", function($templateCache) {$templateCache.put("/likeBox/dislike.svg.html","<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 31 31\"><path fill=\"none\" stroke=\"#828282\" stroke-miterlimit=\"10\" d=\"M30.5 25.8c0 2.5-2 4.6-4.6 4.6H5.2c-2.5 0-4.6-2-4.6-4.6V5.2C.6 2.7 2.6.6 5.2.6h20.7c2.5 0 4.6 2 4.6 4.6v20.6z\" class=\"back\"/><g fill=\"#828282\"><circle cx=\"8\" cy=\"9.9\" r=\"1.9\"/><circle cx=\"23.1\" cy=\"9.9\" r=\"1.9\"/></g><path fill=\"none\" stroke=\"#828282\" stroke-miterlimit=\"10\" d=\"M7 23.7c0-9 16.9-8.9 16.9 0\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/></svg>");
$templateCache.put("/likeBox/index.html","<div class=\"likeBox\" ng-class=\"{ \'likeBox--disabled\': isControlsDisabled() }\"><button class=\"likeBox__like likeBox__button\" ng-click=\"like()\" ng-disabled=\"isControlsDisabled()\" ng-class=\"{ \'likeBox__button--active\': isLiked(), \'likeBox__button--disabled\': isControlsDisabled()}\"><div ng-include=\"\'/likeBox/like.svg.html\'\"></div></button> <button class=\"likeBox__dislike likeBox__button\" ng-click=\"dislike()\" ng-disabled=\"isControlsDisabled()\" ng-class=\"{ \'likeBox__button--active\': isDisliked(), \'likeBox__button--disabled\': isControlsDisabled()}\"><div ng-include=\"\'/likeBox/dislike.svg.html\'\"></div></button> <span class=\"likeBox__text\" ng-class=\"{ \'likeBox__text--disabled\': isControlsDisabled() }\">Do you like ?</span></div>");
$templateCache.put("/likeBox/like.svg.html","<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 31 31\"><path fill=\"none\" stroke=\"#828282\" stroke-miterlimit=\"10\" d=\"M30.5 25.8c0 2.5-2 4.6-4.6 4.6H5.2c-2.5 0-4.6-2-4.6-4.6V5.2C.6 2.7 2.6.6 5.2.6h20.7c2.5 0 4.6 2 4.6 4.6v20.6z\" class=\"back\"/><g fill=\"#828282\"><circle cx=\"8\" cy=\"9.9\" r=\"1.9\"/><circle cx=\"23.1\" cy=\"9.9\" r=\"1.9\"/></g><path fill=\"none\" stroke=\"#828282\" stroke-miterlimit=\"10\" d=\"M7 16.9c0 9 16.9 8.9 16.9 0\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/></svg>");}]);