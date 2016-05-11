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

describe('FTV::LikeBox::Component', function () {
    var $scope, element;
    var $window;

    beforeEach(module('ftv.component.likeBox', function($provide){
        $window = {
            OAS_sitepage: 'dummy-sitepage',
            bowser: {
                mobile: true
            }
        };
        $provide.value('$window', $window);
    }));

    beforeEach(inject(function($compile, $rootScope) {
        $scope = $rootScope.$new();
        $scope.isDisabled = false;
        $scope.context = {
            isLiked: false,
            isDisliked: false
        };
        element = $compile('<ftv-like-box is-disabled="isDisabled" context="context"></ftv-like-box>')($scope);
    }));

    describe('rendering', function () {
        it('display like and dislike buttons correctly according to context parameters', function () {
            $scope.context = {
                isLiked: false,
                isDisliked: false
            };

            $scope.$digest();

            var $element = $(element[0]);
            expect($element.find('.likeBox__button').length).toEqual(2);
            expect($element.find('.likeBox__like').length).toEqual(1);
            expect($element.find('.likeBox__dislike').length).toEqual(1);

            expect($element.find('.likeBox__like').hasClass('likeBox__button--active')).toEqual(false);
            expect($element.find('.likeBox__dislike').hasClass('likeBox__button--active')).toEqual(false);

            $scope.context = {
                isLiked: true,
                isDisliked: false
            };

            $scope.$digest();

            expect($element.find('.likeBox__like').hasClass('likeBox__button--active')).toEqual(true);
            expect($element.find('.likeBox__dislike').hasClass('likeBox__button--active')).toEqual(false);

            $scope.context = {
                isLiked: false,
                isDisliked: true
            };

            $scope.$digest();

            expect($element.find('.likeBox__like').hasClass('likeBox__button--active')).toEqual(false);
            expect($element.find('.likeBox__dislike').hasClass('likeBox__button--active')).toEqual(true);
        });
        it('display like and dislike buttons correctly according to context parameters', function () {
            $scope.isDisabled = false;

            $scope.$digest();

            var $element = $(element[0]);
            expect($element.find('.likeBox__like').hasClass('likeBox__button--disabled')).toEqual(false);
            expect($element.find('.likeBox__dislike').hasClass('likeBox__button--disabled')).toEqual(false);
            expect($element.find('.likeBox__like').attr('disabled')).toEqual(undefined);
            expect($element.find('.likeBox__dislike').attr('disabled')).toEqual(undefined);
            expect($element.find('.likeBox__text').hasClass('likeBox__text--disabled')).toEqual(false);

            $scope.isDisabled = true;

            $scope.$digest();

            expect($element.find('.likeBox__like').hasClass('likeBox__button--disabled')).toEqual(true);
            expect($element.find('.likeBox__dislike').hasClass('likeBox__button--disabled')).toEqual(true);
            expect($element.find('.likeBox__like').attr('disabled')).toEqual('disabled');
            expect($element.find('.likeBox__dislike').attr('disabled')).toEqual('disabled');
            expect($element.find('.likeBox__text').hasClass('likeBox__text--disabled')).toEqual(true);
        });
    });

    describe('isLiked', function () {
        it('return context.isLiked parameters', function () {
            $scope.$digest();

            var directiveScope = element.isolateScope();
            directiveScope.context = {
                isLiked: true
            };

            expect(directiveScope.isLiked()).toEqual(true);

            directiveScope.context = {
                isLiked: false
            };

            expect(directiveScope.isLiked()).toEqual(false);
        });
    });

    describe('isDisliked', function () {
        it('return context.isDisliked parameters', function () {
            $scope.$digest();

            var directiveScope = element.isolateScope();
            directiveScope.context = {
                isDisliked: true
            };

            expect(directiveScope.isDisliked()).toEqual(true);

            directiveScope.context = {
                isDisliked: false
            };

            expect(directiveScope.isDisliked()).toEqual(false);
        });
    });

    describe('like and dislike', function () {
        beforeEach(inject(function($rootScope){
            spyOn($rootScope, '$emit');
        }));

        function testAction(method, isLiked, isDisliked){
            $scope.$digest();

            var directiveScope = element.isolateScope();
            directiveScope[method]();

            $scope.$apply();

            expect(directiveScope.context.isLiked).toEqual(isLiked);
            expect(directiveScope.context.isDisliked).toEqual(isDisliked);

            expect($scope.$emit).toHaveBeenCalledWith('ftv-likebox-update', { isLiked: isLiked, isDisliked: isDisliked});
        }

        describe('like', function () {
            beforeEach(function(){
                $scope.context = {
                    isLiked: false,
                    isDisliked: true
                };
            });
            it('update correctly context when api request success', function () {
                testAction('like', true, false);
            });
        });
        describe('dislike', function () {
            beforeEach(function(){
                $scope.context = {
                    isLiked: true,
                    isDisliked: false
                };
            });
            it('update correctly context when api request success', function () {
                testAction('dislike', false, true);
            });
        });
    });
});
