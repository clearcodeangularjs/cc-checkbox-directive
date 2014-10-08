/*

    Copyright (C) 2012-2013 by Clearcode <http://clearcode.cc>
    and associates (see AUTHORS).

    This file is part of cc-custom-checkbox-directive.

    cc-custom-checkbox-directive is free software: you can redistribute it and/or modify
    it under the terms of the Lesser GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    cc-custom-checkbox-directive is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with cc-custom-checkbox-directive.  If not, see <http://www.gnu.org/licenses/>.

*/
'use strict';

angular.module('cc.checkbox.directive')
    .directive('customCheckbox', function () {
        return {
            template: '<label><div class="custom-checkbox"></div><span ng-transclude></span></label>',
            restrict: 'E',
            require: 'ngModel',
            transclude: true,
            link: function postLink($scope, element, attrs, ngModel) {
                var checkbox = element.find('.custom-checkbox');

                // model -> ui
                ngModel.$render = function(){
                    checkbox.toggleClass('checked', Boolean(ngModel.$modelValue));
                }

                // ui -> model
                element.on('click', function(){
                    $scope.$apply(function(){
                        ngModel.$setViewValue(!Boolean(ngModel.$modelValue));
                        ngModel.$render();
                    });
                });
            }
        };
    });
