import React from 'react';
import ReactDOM from 'react-dom';

import MyComponent from './MyComponent';
import angular from 'angular';

angular.module('fasterAngular', []).
controller('mycontroller', ['$scope', function($scope) {
    $scope.framework = 'ReactJs';

}]).directive('fastNg', function() {
    return {
        restrict: 'E',
        scope: {
            framework: '='
        },
        link: function(scope, el, attrs) {
            scope.$watch('framework', function(newValue, oldValue) {
                ReactDOM.render( <MyComponent framework={newValue}/>, el[0]);
            }, true);
        }
    }
});
