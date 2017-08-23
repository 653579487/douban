/**
 *
 * Created by Administrator on 2017/8/19.
 */
(function(angular){
    'use strict';
    /*模块*/
    var module = angular.module('douban',[
        'ngRoute',
        'douban.movie',
        'atelic'
    ]);
    /*配置路由*/
     module.config(['$routeProvider',function($routeProvider){
         $routeProvider.otherwise({redirectTo: '/in_theaters/1'});
     }]);
    /*控制器*/
    module.controller('doubanController', ['$scope','$location', function($scope,$location){
            $scope.$location = $location;
            $scope.$watch('$location.path()', function(now, old) {
                    if (now.startsWith("/in_theaters")) {
                       $scope.type = 'in_theaters'
                    }else if (now.startsWith('/coming_soon')) {
                        $scope.type = 'coming_soon';
                    }else if (now.startsWith('/top250')) {
                            $scope.type = 'top250';
                    };
                    console.log($scope.type)
            });
    }])

})(angular);
