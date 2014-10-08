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

describe('Directive: customCheckbox', function () {

    // load the directive's module
    beforeEach(module('sandboxApp'));

    var dom, $scope;

    beforeEach(inject(function ($rootScope, $compile) {
        $scope = $rootScope.$new();
        dom = $compile('<custom-checkbox ng-model="value"></custom-checkbox>')($scope);
    }));

    it('model should equal undefined', function(){
        expect($scope.value).toEqual(undefined);
    });

    it('should not be checked in ui', function(){
        expect(dom.find('.custom-checkbox.checked').length).toEqual(0);
    });

    describe('after click', function(){
        beforeEach(function(){
            dom.click();
        });

        it('model should equal true', function(){
            expect($scope.value).toEqual(true);
        });

        it('should be checked in ui', function(){
            expect(dom.find('.custom-checkbox.checked').length).toEqual(1);
        });

        describe('after click', function(){
            beforeEach(function(){
                dom.click();
            });

            it('model should equal false', function(){
                expect($scope.value).toEqual(false);
            });

            it('should not be checked in ui', function(){
                expect(dom.find('.custom-checkbox.checked').length).toEqual(0);
            });
        });
    });
});
